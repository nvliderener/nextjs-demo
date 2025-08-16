'use client'
import { ProuductTypes } from '@/types/global'
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { Button } from "@/components/ui/button"
import { useState } from 'react'


function AddCart({ product }: { product: ProuductTypes }) {
    console.log('product', product)
    const [value, setValue] = useState<string>('')
    const onValueChange = (value) => {
        console.log(value);
        setValue(value)
    }
    return (
        <div className='flex-1 py-12'>
            <p>Select</p>
            <ToggleGroup
                type="single"
                className="justify-start border-b mx-6"
                variant="outline"
                onValueChange={onValueChange}
            >
                {product.variant.map(s => <ToggleGroupItem value={s} key={s} className='px-5 bg-slate-100'>{s}</ToggleGroupItem>)}
            </ToggleGroup>
            <h3>Select</h3>
            <p className="text-2xl font-bold text-red-500 mb-6">${product.price}</p>
            <Button disabled={!value}>add to cart</Button>
        </div>
    );
}

export default AddCart;