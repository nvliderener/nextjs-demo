'use client'
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { SortTitle, SortList } from '../lib/constants'
import { SortValue } from '@/types/global'
import { useSortStore } from '@/store/index'

function Sort() {
    const { setValue } = useSortStore()
    const onValueChange = (value: SortValue) => {
        setValue(value);
    }
    return (
        <div className="w-64 border py-4 text-center">
            <p className="my-2">{SortTitle}</p>
            <ToggleGroup
                type="single"
                className="flex flex-col justify-items-center space-y-2"
                defaultValue={'latest'}
                onValueChange={onValueChange}
            >
                {SortList.map(s => <ToggleGroupItem value={s.value} key={s.value}>{s.text}</ToggleGroupItem>)}
            </ToggleGroup>
        </div>
    );
}

export default Sort;