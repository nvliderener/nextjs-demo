export type SortValue = "latest" | "higt" | "low"

export type ProuductTypes = {
    id: number,
    name: string,
    price: string,
    description: string,
    image: string,
    variant: string[],
}
export type ProuductAction = {
    status: number,
    body: string,
    data: ProuductTypes[]
}