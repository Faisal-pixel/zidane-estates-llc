
declare module '*.mp4' {
    const src: string
    export default src
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-square-web-payments-sdk' {
    export const CashAppPay: any
    export const CreditCard: any
    export const GooglePay: any
    export const ApplePay: any
    export const PaymentForm: any
}

// import Square from 'square'

// declare global {
//     interface Window {
//         Square: any
//     }
// }

// export {}