import React from "react"
import Head from "next/head"
import Form from "./form"
import Preview from "./preview"

const Main = () => {
  return (
    <>
      <Head>
        <title>Techsume - Resume Builder</title>
        <meta
          name="descrition"
          content="Techsume is a resume builder based on templates for software engineer / computer science positions."
        />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold">Welcome to Sprix!</h1>
        <p className="p-4 text-lg">
          Techsume is a resume builder based on templates for software engineer /
          computer science positions.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row md:justify-evenly">
        <Form />
        <Preview />
      </div>
    </>
  )
}

export default Main
