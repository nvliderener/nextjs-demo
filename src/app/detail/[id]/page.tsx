import { productDetailAction } from '@/actions/product'
import Image from 'next/image'
import AddCart from '@/components/addCart'

async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const prd = await productDetailAction(Number(id))
    const product = prd.data[0]
    // console.log('params', id, product)
    return (
        <div className='container flex py-6'>
            <div className="w-64">
                <h2 className="font-sans text-3xl leading-10 font-bold my-8">{product.name}</h2>
                <p className="leading-10">{product.description}</p>
            </div>
            <div className="h-[500px] flex-1 mx-10 bg-slate-50 p-4 rounded-lg shadow-md relative" >
                <Image src={product.image} alt={product.name} fill={true} priority sizes='300' style={{ objectFit: 'cover' }} />
            </div>
            <div className="w-80">
                <AddCart product={product} />
            </div>
        </div>
    );
}

export default Page;