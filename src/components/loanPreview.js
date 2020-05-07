import React, { useEffect, useState } from "react"
import Image from "./image"
import {
  defaultLoanAmount,
  faq,
  interestRates,
  programLoanInfo,
  schoolName,
} from "../constants/programInfo"

const LoanPreview = props => {
  const [programIndex, setProgramIndex] = useState(0)
  const [loanTerm, setLoanTerm] = useState(36)
  const [metroAmount, setMetroAmount] = useState(
    programLoanInfo[programIndex]["metros"][0]["loanInfo"]["maxLoanAmt"]
  )
  const [loanValue, setLoanValue] = useState(
    programLoanInfo[programIndex]["loanInfo"]["maxLoanAmt"]
  )
  const [programMax, setProgramMax] = useState(
    programLoanInfo[0]["loanInfo"]["maxLoanAmt"]
  )
  const [monthlyPayment, setMonthlyPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [totalPayment, setTotalPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [interestPayment, setInterestPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [nonPaymentPeriod, setNonPaymentPeriod] = useState(
    programLoanInfo[0]["loanInfo"]["Interest Only"]["k"]
  )
  const [loanType, setLoanType] = useState(programLoanInfo[0]["loanTypes"][0])
  const [showLoanTypes, setShowLoanTypes] = useState(
    programLoanInfo[0]["showLoanTypes"]
  )
  const queryParams = programLoanInfo.map(program => program.queryParams)
  const [metros, setMetros] = useState(programLoanInfo[0]["metros"])
  const [multiMetros, hasMultiMetros] = useState(
    programLoanInfo[0]["showMetros"]
  )
  const [loanInformation, setLoanInformation] = useState(
    programLoanInfo[0]["loanInfo"]
  )

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // even dollar amounts without cents
  })

  const formatterWithCents = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  const calculateMonthlyPayment = () => {
    const monthlyRate36 = Number(interestRates.ir36) / 100 / 12
    const monthlyRate60 = Number(interestRates.ir60) / 100 / 12
    const borrowedAmount = Number(loanValue) || Number(defaultLoanAmount)
    const totalLoan = Number(borrowedAmount) * (1 + Number(faq.origFee))
    let payment36 =
      Number(monthlyRate36 * totalLoan) /
      (1 - 1 / Math.pow(1 + monthlyRate36, 36))
    let payment60 =
      Number(monthlyRate60 * totalLoan) /
      (1 - 1 / Math.pow(1 + monthlyRate60, 60))
    setMonthlyPayment({
      payment36: payment36.toFixed(2),
      payment60: payment60.toFixed(2),
    })
    calculateInterest()
    calculateTotalPayment()
  }

  const calculateInterest = () => {
    let interest36 =
      ((Number(loanValue) * (1 + Number(faq.origFee))) / 12) *
      (Number(interestRates.ir36) / 100)
    let interest60 =
      ((Number(loanValue) * (1 + Number(faq.origFee))) / 12) *
      (Number(interestRates.ir60) / 100)
    setInterestPayment({
      payment36: interest36.toFixed(2),
      payment60: interest60.toFixed(2),
    })
  }

  const calculateTotalPayment = () => {
    let months = [36, 60]
    let interestPeriod = nonPaymentPeriod
    let payments = []
    if (loanType === "Interest Only") {
      payments[0] =
        interestPayment.payment36 * interestPeriod +
        monthlyPayment.payment36 * months[0]
      payments[1] =
        interestPayment.payment60 * interestPeriod +
        monthlyPayment.payment60 * months[1]
    } else {
      payments[0] = monthlyPayment.payment36 * months[0]
      payments[1] = monthlyPayment.payment60 * months[1]
    }
    setTotalPayment({ payment36: payments[0], payment60: payments[1] })
  }

  const handleProgramName = e => {
    setProgramIndex(Number(e.target.value))
    setLoanType(programLoanInfo[programIndex]["defaultLoanType"])
  }

  const handleLoanType = e => {
    setLoanType(e.target.value)
  }

  const handleMetro = e => {
    setMetroAmount(Number(e.target.value))
    setProgramMax(Number(e.target.value))
  }

  const handleTerm = e => {
    const term = e.target.value
    term === "3 year" ? setLoanTerm(36) : setLoanTerm(60)
  }

  useEffect(() => {
    if (queryParams.indexOf(props.location) !== -1) {
      setProgramIndex(queryParams.indexOf(props.location)) // read query params in url, set default value of select based on index of program
    }
  }, [])

  useEffect(() => {
    setLoanType(programLoanInfo[programIndex]["loanTypes"][0])
  }, [programIndex])

  useEffect(() => {
    calculateMonthlyPayment() // run calculator when page loads to show initial amounts
    // setLoanType(programLoanInfo[programIndex][loanTypes]);
    hasMultiMetros(programLoanInfo[programIndex]["showMetros"])
    setMetros(programLoanInfo[programIndex]["metros"])
    setShowLoanTypes(programLoanInfo[programIndex]["showLoanTypes"])
    setLoanInformation(programLoanInfo[programIndex]["loanInfo"])
    setMetroAmount(
      programLoanInfo[programIndex]["metros"][0]["loanInfo"]["maxLoanAmt"]
    )

    // check to see if the program has multiple locations and set the program max based on individual cities
    if (programLoanInfo[programIndex]["showMetros"]) {
      setProgramMax(metroAmount)
    } else {
      setProgramMax(programLoanInfo[programIndex]["loanInfo"]["maxLoanAmt"])
    }

    setLoanValue(programLoanInfo[programIndex]["loanInfo"]["maxLoanAmt"])
  }, [programIndex, programMax, loanType])

  useEffect(() => {
    calculateTotalPayment()
  }, [monthlyPayment])

  useEffect(() => {
    calculateTotalPayment()
  }, [loanType])

  useEffect(() => {
    if (loanType === "Interest Only") {
      setNonPaymentPeriod(
        programLoanInfo[programIndex]["loanInfo"]["Interest Only"]["k"]
      )
    }
  }, [loanType, programIndex])
  return (
    <div className="loanCalculator__content pt-8 bg-white mb-4">
      <div className="loanCalculator__select flex flex-col items-center px-4">
        <div className="loanCalculator__content">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <div className="flex flex-col md:w-1/2 justify-center px-4">
              <h2 className="text-gray-800 text-center">Simple. Flexible.</h2>
              <p className="text-gray-800" id="leadText">
                We offer loans tailored to students' needs. Preview your options
                and select the right financing solution for you.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <Image />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border-2 border-gray-700 rounded shadow-2xl">
          {faq.multiPrograms ? (
            <>
              <label className="text-sm" htmlFor="program">
                Choose your program
              </label>
              <div className="loanCalculator__selectInput">
                <select
                  id="program"
                  value={programIndex}
                  onChange={handleProgramName}
                >
                  {programLoanInfo.map((program, i) => (
                    <option label={program.name} value={i} key={program.name}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : null}

          <p>{` `}</p>

          <label className={multiMetros ? "text-sm" : "hide"} htmlFor="program">
            Choose your location
          </label>
          <div className={multiMetros ? "loanCalculator__selectInput" : "hide"}>
            <select defaultValue={"default"} onChange={handleMetro}>
              <option>---</option>
              {metros.map((city, i) => (
                <option
                  label={city.location}
                  key={city.location}
                  value={city.loanInfo.maxLoanAmt}
                >
                  {city.location}
                </option>
              ))}
            </select>
          </div>

          <p>{` `}</p>

          <label className={multiMetros ? "text-sm" : "hide"} htmlFor="term">
            Choose your loan term: 3 or 5 year
          </label>
          <div className={multiMetros ? "loanCalculator__selectInput" : "hide"}>
            <select defaultValue={"default"} onChange={handleTerm}>
              <option>---</option>
              <option>3 year</option>
              {programLoanInfo[programIndex]["loanInfo"]["loanTerm60"] && (
                <option>5 year</option>
              )}
            </select>
          </div>

          <p>{` `}</p>

          <p className={showLoanTypes ? "text-sm" : "hide"}>
            Choose what type of payments you’d like to make:
          </p>
          <ol>
            <li>
              <strong>Immediate Repayment:</strong> Start paying your loan back
              1 month after your program begins.
            </li>
            <li>
              <strong>Interest-Only:</strong> Make low interest-only while you
              study and for 3 months after completing your program.
            </li>
            <li>
              <strong>Deferred Repayment:</strong> Make no payments while you
              study and for 3 months after.
            </li>
          </ol>
          <label className={multiMetros ? "text-sm" : "hide"}>
            Choose your loan type
          </label>
          <div
            className={showLoanTypes ? "loanCalculator__selectInput" : "hide"}
          >
            <select value={loanType} onChange={handleLoanType}>
              {programLoanInfo[programIndex]["loanTypes"].map((loanType, i) => (
                <option label={loanType} value={loanType} key={loanType}>
                  {loanType}
                </option>
              ))}
            </select>
          </div>

          <div className="p-4 border-2 border-gray-700 rounded shadow my-8">
            <h3>Example loan for borrowers with excellent credit</h3>
            <p>Interest Only</p>
            <p>Total Loan Amount: $10,000</p>
            <p>For 36 Months</p>
            <p>Monthly Payment: $80.18</p>
            <p>8.99% Interest Rate, 11.07% APR</p>
            <p>Total Cost of Loan: $12,856.16</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanPreview
