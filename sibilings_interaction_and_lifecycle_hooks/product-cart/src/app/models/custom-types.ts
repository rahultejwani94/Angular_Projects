export type Product = {
    id: number,
    name: string,
    desc?: string,
    price: number,
    initial_quantity: number
}

export type CartItem = {
    id: number,
    name: string,
    desc?: string,
    total_price: number,
    quantity: number
}