import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FcBusinessman } from "react-icons/fc"

import { Resume } from "@/types"

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Resume>()

  const onSubmit: SubmitHandler<Resume> = (data) => console.log(data)
  console.log(watch)
  return (
    <div className="p-4 rounded-md bg-slate-300 w-96 text-form">
      <form
        className="grid grid-cols-1 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* User Info */}
        <div className="flex justify-center">
          <h2 className="title-form">User Info</h2>
          <FcBusinessman className="icons" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="name" className="center-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("userInfo.name", {
              required: "The name field is required",
            })}
            className="form-input field-form"
          />
          {errors.userInfo?.name && (
            <span className="error-form">{errors.userInfo.name.message}</span>
          )}

          <label htmlFor="tel" className="center-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("userInfo.phoneNumber", {
              required: "The phone number field is required",
            })}
            className="form-input field-form"
          />
          {errors.userInfo?.phoneNumber && (
            <span className="error-form">
              {errors.userInfo.phoneNumber.message}
            </span>
          )}

          <label htmlFor="email" className="center-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("userInfo.email", {
              required: "The email field is required",
            })}
            className="form-input field-form"
          />
          {errors.userInfo?.email && (
            <span className="error-form">{errors.userInfo.email.message}</span>
          )}

          <label htmlFor="linkedin" className="center-label">
            Linkedin
          </label>
          <input
            type="url"
            id="linkedin"
            {...register("userInfo.linkedin", {
              required: "The linkedin field is required",
            })}
            className="form-input field-form"
          />
          {errors.userInfo?.linkedin && (
            <span className="error-form">
              {errors.userInfo.linkedin.message}
            </span>
          )}

          <label htmlFor="github" className="center-label">
            GitHub
          </label>
          <input
            type="url"
            id="github"
            {...register("userInfo.github", {
              required: "The github field is required",
            })}
            className="form-input field-form"
          />
          {errors.userInfo?.github && (
            <span className="error-form">{errors.userInfo.github.message}</span>
          )}

          <label htmlFor="portfolio" className="center-label">
            Portfolio
          </label>
          <input
            type="url"
            id="portfolio"
            {...register("userInfo.portfolio", {
              required: "The portfolio field is required",
            })}
            className="form-input field-form"
          />
          {errors.userInfo?.portfolio && (
            <span className="error-form">
              {errors.userInfo.portfolio.message}
            </span>
          )}
        </div>

        {/* Education */}
        <div className="flex justify-center">
          <h2 className="title-form">Education</h2>
          <FcBusinessman className="icons" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="university" className="center-label">
            University
          </label>
          <input
            type="text"
            id="university"
            {...register("education.university", {
              required: "The university field is required",
            })}
            className="form-input field-form"
          />
          {errors.education?.university && (
            <span className="error-form">
              {errors.education.university.message}
            </span>
          )}

          <label htmlFor="major" className="center-label">
            Major
          </label>
          <input
            type="text"
            id="major"
            {...register("education.major", {
              required: "The major field is required",
            })}
            className="form-input field-form"
          />
          {errors.education?.major && (
            <span className="error-form">{errors.education.major.message}</span>
          )}

          <label htmlFor="city" className="center-label">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("education.city", {
              required: "The city field is required",
            })}
            className="form-input field-form"
          />
          {errors.education?.city && (
            <span className="error-form">{errors.education.city.message}</span>
          )}

          <label htmlFor="started" className="center-label">
            From:
          </label>
          <input
            type="text"
            id="started"
            {...register("education.from", {
              required: "The from field is required",
            })}
            className="form-input field-form"
          />
          {errors.education?.from && (
            <span className="error-form">{errors.education.from.message}</span>
          )}

          <label htmlFor="to" className="center-label">
            To:
          </label>
          <input
            type="text"
            id="to"
            {...register("education.to", {
              required: "The to field is required",
            })}
            className="form-input field-form"
          />
          {errors.education?.to && (
            <span className="error-form">{errors.education.to.message}</span>
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
