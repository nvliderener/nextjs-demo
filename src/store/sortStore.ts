import { create } from 'zustand'
import { SortValue } from '../types/global'

type SortValueState = {
    sortType: SortValue,
    setValue: (value: SortValue) => void
}
const useSortStore = create<SortValueState>((set) => ({
    sortType: 'latest',
    setValue: (sortType: SortValue) => set({ sortType }),
}))

export default useSortStore