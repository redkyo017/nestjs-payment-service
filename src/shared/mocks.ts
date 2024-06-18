import { PAYMENT_STATUS } from "./constants";

export const PAYMENTS_PROCESS = [
    {
        id: 1,
        status: PAYMENT_STATUS.CONFIRMED,
    },
    {
        id: 2,
        status: PAYMENT_STATUS.DECLINED,
    },
    {
        id: 3,
        status: PAYMENT_STATUS.DECLINED,
    },
    {
        id: 4,
        status: PAYMENT_STATUS.CONFIRMED,
    },
    {
        id: 5,
        status: PAYMENT_STATUS.CONFIRMED,
    },
]