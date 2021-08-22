export interface IBook {
    id?: number
    title: string
    categories: string[]
    authors: string[]
    img: string
    description?: string
}

export interface IResponse {
    items: any[]
    kind: string
    totalItems: number
}