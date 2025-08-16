import Sort from '../../components/Sort'
import Product from '@/components/Product'
import { productAction } from '@/actions/product'

export default async function Page() {
    const res = await productAction()
    console.log('res', res)
    return (<div className='container flex'>
        <Sort />
        <Product dataList={res.data} />
    </div>)
}