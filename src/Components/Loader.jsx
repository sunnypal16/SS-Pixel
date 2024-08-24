import React from 'react'
import spinner from "../assets/spinner.gif"

export const Loader = () => {
  return (
    <>
    <div className="img">
        <img src={spinner} alt="load" />
    </div>
    </>
  )
}
