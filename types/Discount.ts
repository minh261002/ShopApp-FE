
export type Discount = {
    id: number;
    code: string;
    date_end: string;
    type: string;
    description: string | null;
    discount_value: number | null;
    percent_value: number | null;
}

export type DiscountApply = {
    amount: number;
    original: {
        message: string;
    }
}