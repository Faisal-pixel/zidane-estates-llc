/* eslint-disable @typescript-eslint/no-explicit-any */

'use server'

import { randomUUID } from 'crypto'
import { Client } from 'square'
;(BigInt.prototype as any).toJSON = function () {
    return this.toString()
}

const { paymentsApi } = new Client({
    accessToken: process.env.NEXT_PUBLIC_SQUARE_ACCESS_TOKEN,
    environment: 'sandbox' as any,
})

export async function submitPayment(sourceId: string, amount: number) {
    try {
        const { result } = await paymentsApi.createPayment({
            idempotencyKey: randomUUID(),
            sourceId,
            amountMoney: {
                currency: 'USD',
                amount: BigInt(amount),
            },
        })

        return result
    } catch (error) {
        console.log(error)
    }
}
