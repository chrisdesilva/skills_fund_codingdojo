import React from "react"
import Button from "./button"
import LeadCaptureForm from "./leadcaptureform"

const ApplyFooter = props => {
  return (
    <div className="flex justify-center py-8 px-2 lg:px-0 bg-gray-200">
      <div className="flex flex-col items-center py-8 mx-2 lg:mx-10 w-full lg:w-1/3 rounded  bg-white border-primary border-t-8">
        <h2 className="font-bold text-center">Ready to get Started?</h2>
        <div className="mx-2 px-12">
          <p className="text-center">Begin building your future today!</p>
          <Button
            buttonClassName="opacityApply uppercase bg-primary p-3 rounded-full shadow-lg text-white w-40"
            divClassName="flex justify-center"
            text="apply now"
            onClick={props.onClick}
            id="applyFooter"
          />
        </div>
      </div>
      <div className="flex flex-col items-center py-8 mx-2 lg:mx-10 w-full lg:w-1/3 rounded  bg-white border-primary border-t-8">
        <h2 className="font-bold text-center">Want to Learn More?</h2>
        <div className="mx-2 px-12">
          <p className="text-center">
            We'll send you our step-by-step guide to paying for your program.
          </p>
          <LeadCaptureForm />
        </div>
      </div>
    </div>
  )
}

export default ApplyFooter
