# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /Techsume
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /Techsume
COPY . .
COPY --from=deps /Techsume/node_modules ./node_modules
ARG NODE_ENV=devolpement
RUN echo ${NODE_ENV}
RUN NODE_ENV=${NODE_ENV} yarn build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /Techsume
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /Techsume/next.config.js ./next.config.js
COPY --from=builder /Techsume/public ./public
COPY --from=builder --chown=nextjs:nodejs /Techsume/.next ./.next
COPY --from=builder /Techsume/node_modules ./node_modules
COPY --from=builder /Techsume/package.json ./package.json
COPY --from=builder /Techsume/src/pages ./src/pages

USER nextjs

# Expose
EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "start"]

