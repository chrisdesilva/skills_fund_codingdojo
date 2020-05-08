import React from "react"
import { faq, interestRateCards } from "../constants/programInfo"

const LoanPreview = props => {
  return (
    <div className="loanCalculator__content pt-8 bg-white mb-4">
      <div className="loanCalculator__select flex flex-col items-center px-4">
        <div className="loanCalculator__content">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <div className="flex flex-col justify-center px-4">
              <h2 className="text-gray-800 text-center">Simple. Flexible.</h2>
              <p className="text-gray-800" id="leadText">
                We offer loans tailored to your needs. Preview your options and
                select the right financing solution for you.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around p-4 w-full">
          {faq.interestOnly && (
            <div className="flex flex-col items-center justify-between p-4 border-2 border-gray-700 rounded shadow-2xl w-64 text-center">
              <h3>Deferred Repayment</h3>
              <p>Make no payments while you study and for 3 months after</p>
              <div>
                <p className="mb-0 text-xs">
                  Interest Rate: {interestRateCards.deferred.interestRate}
                </p>
                <p className="mt-0 text-xs">
                  APR: {interestRateCards.deferred.APR}
                </p>
              </div>
              <p onClick={props.onClick} className="footerLink cursor-pointer">
                Get Started &rarr;
              </p>
            </div>
          )}
          {faq.interestOnly && (
            <div className="flex flex-col items-center justify-between p-4 border-2 border-gray-700 rounded shadow-2xl w-64 text-center">
              <h3>Interest Only</h3>
              <p>
                Make low interest-only while you study and for 3 months after
                completing your program
              </p>
              <div>
                <p className="mb-0 text-xs">
                  Interest Rate: {interestRateCards.interestOnly.interestRate}
                </p>
                <p className="mt-0 text-xs">
                  APR: {interestRateCards.interestOnly.APR}
                </p>
              </div>
              <p onClick={props.onClick} className="footerLink cursor-pointer">
                Get Started &rarr;
              </p>
            </div>
          )}
          {faq.immediateRepayment && (
            <div className="flex flex-col items-center justify-between p-4 border-2 border-gray-700 rounded shadow-2xl w-64 text-center ">
              <h3>Immediate Repayment</h3>
              <p>
                Start paying your loan back 1 month after your program begins
              </p>
              <div>
                <p className="mb-0 text-xs">
                  Interest Rate:{" "}
                  {interestRateCards.immediateRepayment.interestRate}
                </p>
                <p className="mt-0 text-xs">
                  APR: {interestRateCards.immediateRepayment.APR}
                </p>
              </div>
              <p onClick={props.onClick} className="footerLink cursor-pointer">
                Get Started &rarr;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoanPreview
