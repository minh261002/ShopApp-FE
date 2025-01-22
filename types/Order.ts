export type Order = {
    user_id: number | null;
    province_id: number;
    district_id: number;
    ward_id: number;
    address: string;
    name: string;
    phone: string;
    email: string;
    note: string;
    status: number;
    payment_method: number;
    shipping_method: number;
    shipping_fee: number;
    discount: number;
    sub_total: number; 
    total_price: number;
    items: OrderItem[];
}

export type OrderItem = {
    id: number;
    order_id: number;
    product_id: number;
    product_variation_id: number;
    quantity: number;
    price: number;
}

export type OrderResponse = {
    checkoutUrl?: string;
    id: number;
    user_id: number | null;
    order_number: string;
    province_id: number;
    district_id: number;
    ward_id: number;
    address: string;
    name: string;
    phone: string;
    email: string;
    note: string;
    status: number;
    payment_status  : number;
    payment_method: number;
    shipping_method: number;
    shipping_fee: number;
    discount: number;
    sub_total: number;
    total_price: number;
    cancel_reason: string;
    created_at: string;
    items: OrderItem[];
}