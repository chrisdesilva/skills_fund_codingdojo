import logo from "../images/codingdojo_logo.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.50 - 11.59%",
  APRRange60: "12.80 - 12.84%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.59%",
      financeCharge36: "$2,293.64",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.84%",
      financeCharge60: "$4,040.39",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "3", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "11.69%",
      financeCharge36: "$1,808.87",
      FullMonthlyPayment36: "$314.14",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$9,500",
      LoanExampleOFeeAmt: "$380",
      LoanExampleAmtPlusOFee: "$9,880",
    },
  ],
}

export const interestRateCards = {
  // 3 month program, 3 months grace for term details section
  APR36: "9.05 - 17.21%",
  APR60: "10.04 - 17.24%",
  immediateRepayment: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    APR36: "9.82% - 17.21%",
    APR60: "10.34% - 17.24%",
  },
  interestOnly: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    APR36: "9.05% - 16.47%",
    APR60: "10.04% - 16.95%",
  },
  deferred: {
    int36: "7.00 - 14.25%",
    int60: "8.75 - 15.50%",
    APR36: "9.46% - 16.21%",
    APR60: "10.45% - 17.24%",
  },
}

export const previewText = {
  headline: "Simple. Flexible.",
  subheadline:
    "We offer loans tailored to your needs. Preview your options and select the right financing solution for you.",
  // headline: "Simple. Clear.",
  // subheadline: "We offer a straightforward loan so you can focus on your program and transform your future.",
  cards: [
    {
      heading: "Deferred Repayment",
      body: "Make no payments while you study and for three months after.",
    },
    {
      heading: "Interest Only",
      body:
        "Make low interest-only payments while you study and for three months after completing your program.",
    },
    // {
    //   heading: "Immediate Repayment",
    //   body: "Start paying your loan back one month after your program begins.",
    // },
    // {
    //   heading: "36-Month Loan",
    //   body:
    //     "Pay off your loan faster. Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    // },
    // {
    //   heading: "60-Month Loan",
    //   body:
    //     "Make smaller monthly payments. Start paying your loan back one month after your program begins, and make 60 monthly payments until your loan is repaid.",
    // },
  ],
}

export const faq = {
  // faq section
  costOfLiving: true, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: false, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: true, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  deferred36: "8.99%",
  deferred60: "10.99%",
  APR36: "11.50 - 11.59%",
  APR60: "12.80 - 12.84%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Coding Dojo's Onsite Bootcamp",
      maxAmount: "the max loan amount for tuition for your metro",
      col: true,
      colAmount: "$4,500",
    },
    {
      programName: "Coding Dojo's Online Full-Time Bootcamp",
      maxAmount: "$14,995",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Coding Dojo's Online Part-Time Bootcamp",
      maxAmount: "$6,995",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Coding Dojo's Data Science program",
      maxAmount: "$14,995",
      col: true,
      colAmount: "$4,500",
    },
    {
      programName: "Coding Dojo's Online Part-time Flex Bootcamp",
      maxAmount: "$8,995",
      col: false,
      colAmount: "$4,500",
    },
    {
      programName: "Coding Dojo's Online Part-time (1 Stack)",
      maxAmount: "$6,995",
      col: false,
      colAmount: "$4,500",
    },
    {
      programName: "Coding Dojo's Online Part-time (2 Stacks)",
      maxAmount: "$10,995",
      col: false,
      colAmount: "$4,500",
    },
    {
      programName: "Coding Dojo's Online Part-time (3 Stacks)",
      maxAmount: "$14,495",
      col: false,
      colAmount: "$4,500",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Coding Dojo"

export const schoolURL = "https://www.codingdojo.com/" // update with url of school's website

export const skfURL = "https://codingdojo.skills.fund" // update with Skills Fund url

export const headline = "Learn to Code at Coding Dojo" // update headline as appropriate

export const netlifyFormName = "codingdojo_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "c722ff33-00c5-4a56-8849-c4982db81f44" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_codingdojo_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = true // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Onsite Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKCD17",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 19495,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: true, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: [
      "Arlington, VA",
      "Berkeley (East Bay), CA",
      "Chicago, IL",
      "Dallas, TX",
      "Los Angeles, CA",
      "Orange County, CA",
      "Seattle, WA",
      "Silicon Valley, CA",
      "Tulsa, OK",
    ],
    metros: [
      // list in same order as locations array above
      {
        location: "Arlington, VA",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: null,
          },
        },
      },
      {
        location: "Berkeley (East Bay), CA",
        loanInfo: {
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Chicago, IL",
        loanInfo: {
          maxLoanAmt: 18495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Dallas, TX",
        loanInfo: {
          maxLoanAmt: 17495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Los Angeles, CA",
        loanInfo: {
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Orange County, CA",
        loanInfo: {
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Seattle, WA",
        loanInfo: {
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Silicon Valley, CA",
        loanInfo: {
          maxLoanAmt: 20495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Tulsa, OK",
        loanInfo: {
          maxLoanAmt: 14995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Online Full-Time Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKDOJOO19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 14995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          // match loanInfo to Program 2 loanInfo above
          maxLoanAmt: 14995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Online Part-Time Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKDOJON18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 6995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.5,
        apr60: 12.8,
      },
      "Immediate Repayment": {
        apr36: 11.25,
        apr60: 12.55,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 6995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Data Science",
    url: "https://my.skills.fund/application?lenderCode=SKCDDS19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 19495,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.5,
        apr60: 12.84,
      },
      "Immediate Repayment": {
        apr36: 11.25,
        apr60: 12.55,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.5,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Online Part-time Flex Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SFCDOPTFB20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 8995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 10,
        apr36: 11.26,
        apr60: 12.69,
      },
      "Immediate Repayment": {
        apr36: 11.25,
        apr60: 12.55,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 8995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 10,
            apr36: 11.26,
            apr60: 12.69,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Online Part-time (1 Stack)",
    url: "https://my.skills.fund/application?lenderCode=SFCDOPT1S20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 6995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 7,
        apr36: 11.5,
        apr60: 12.58,
      },
      "Immediate Repayment": {
        apr36: 11.25,
        apr60: 12.55,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 6995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 7,
            apr36: 11.5,
            apr60: 12.58,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Online Part-time (2 Stacks)",
    url: "https://my.skills.fund/application?lenderCode=SFCDOPT2S20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 10995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 9,
        apr36: 11.34,
        apr60: 12.73,
      },
      "Immediate Repayment": {
        apr36: 11.25,
        apr60: 12.55,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 10995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 9,
            apr36: 11.34,
            apr60: 12.73,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Online Part-time (3 Stacks)",
    url: "https://my.skills.fund/application?lenderCode=SFCDOPT3S20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 14495,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 11,
        apr36: 11.2,
        apr60: 12.66,
      },
      "Immediate Repayment": {
        apr36: 11.25,
        apr60: 12.55,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 14495,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 11,
            apr36: 11.2,
            apr60: 12.66,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to your metro's max (see table below) for the Onsite Bootcamp, up to $14,995 for the Online Full-Time Bootcamp tuition, up to $6,995 for the Online Part-Time Bootcamp tuition, and up to $14,995 for the Data Science program tuition and $4,500 for cost of living. <br/><br/><strong>Please note: </strong>The cost of living portion of your loan may not exceed the amount requested for tuition."

export const paymentTable = {
  headers: ["Location", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "Arlington, VA",
      tuition: "$14,995",
      col: "$4,500",
      max: "$19,495",
    },
    {
      name: "Silicon Valley, CA",
      tuition: "$15,995",
      col: "$4,500",
      max: "$20,495",
    },
    {
      name: "Los Angeles, CA & Orange County, CA",
      tuition: "$14,995",
      col: "$4,500",
      max: "$19,495",
    },
    {
      name: "Seattle, WA & Berkeley (East Bay), CA",
      tuition: "$14,995",
      col: "$4,500",
      max: "$19,495",
    },
    {
      name: "Dallas, TX",
      tuition: "$12,995",
      col: "$4,500",
      max: "$17,495",
    },
    {
      name: "Tulsa, OK",
      tuition: "$10,495",
      col: "$4,500",
      max: "$14,995",
    },
    {
      name: "Chicago, IL",
      tuition: "$13,995",
      col: "$4,500",
      max: "$18,495",
    },
  ],
  show: true,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>
