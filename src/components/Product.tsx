'use client'
import { ProuductTypes } from '../types/global'
import Image from 'next/image'
import { useSortStore } from '@/store/index'
import { useRouter } from 'next/navigation'

function Product({ dataList }: { dataList: ProuductTypes[] }) {
    const productList = [...dataList]
    const { sortType } = useSortStore()
    const router = useRouter()
    // console.log('dataList', sortType, dataList)
    if (sortType !== 'latest') {
        productList.sort((a: ProuductTypes, b: ProuductTypes) => sortType === 'higt' ? a.price - b.price : b.price - a.price)
    }
    const handleClick = (id: number) => {
        router.push(`/detail/${id}`)
    }
    return (
        <div className='flex-1 border'>
            <h2>All Products </h2>
            <div className='grid grid-cols-3 gap-4 border'>
                {
                    productList.map(product => (
                        <div
                            key={product.id}
                            onClick={() => handleClick(product.id)}
                            className='bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer'
                        >
                            <Image src={product.image} alt={product.name} width={300} height={300} />
                            <div className="flex items-center">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Product;