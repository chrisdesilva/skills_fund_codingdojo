import React from "react"
import { faq, previewText } from "../constants/programInfo"

const LoanPreview = props => {
  return (
    <div className=" pt-8 bg-white mb-4">
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col justify-center px-4">
            <h2 className="text-gray-800 text-center">
              {previewText.headline}
            </h2>
            <p className="text-gray-800 text-center mb-0">
              {previewText.subheadline}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center p-4 w-full">
          {previewText.cards.map(card => (
            <div className="w-full md:w-1/2 xl:w-1/3 flex flex-col items-center justify-between p-4 border-2 border-gray-700 rounded shadow-2xl my-2 mx-auto lg:mx-8 text-center">
              <h3 className>{card.heading}</h3>
              <p className>{card.body}</p>
              {card.heading === "Deferred Repayment" && (
                <span className="ribbon text-sm">NEW</span>
              )}
              <p onClick={props.onClick} className="footerLink cursor-pointer">
                Get Started &rarr;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoanPreview
