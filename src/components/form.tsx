import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FcBusinessman } from "react-icons/fc"

import { Resume } from "@/types"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Resume>()

  const onSubmit: SubmitHandler<Resume> = (data) => console.log(data)
  return (
    <div className="bg-slate-300 w-96 p-4 rounded-md text-form">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <h2 className="title-form">User Info</h2>
          <FcBusinessman className="icons" />
        </div>
        <div className="grid grid-cols-2">
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
        </div>
      </form>
    </div>
  )
}

export default Form
