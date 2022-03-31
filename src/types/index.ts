export interface UserInfo {
  name: string
  phoneNumber: number
  email: string
  linkedin: string
  github: string
  portfolio: string
}

export interface Education {
  university: string
  major: string
  city: string
  from: string
  to: string
}

export interface BulletsInfo {
  bullets: [string]
}

export interface Experience {
  title: string
  company: string
  started: string
  ended: string
  city: string
  bullets: BulletsInfo
}

export interface Projects {
  name: string
  tools: string
  from: string
  to: string
  bullets: BulletsInfo
}

export interface TechnicalSkills {
  languages: string
  frameworks: string
  developerTools: string
  libraries: string
}

export interface Resume {
  userInfo: UserInfo
  education: Education
  experience: Experience
  projects: Projects
  technicalSkills: TechnicalSkills
}
