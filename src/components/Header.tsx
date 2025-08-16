import Link from 'next/link';
import { Separator } from "./ui/separator"
import { Title, MenuList } from '@/lib/constants';


function Header() {
    console.log('Header')
    return (
        <div className="h-16 border">
            <div className="container flex items-center justify-between h-full">
                <div className='text-2xl'>
                    <Link href="/">{Title}</Link>
                </div>
                <div className='flex space-x-2 text-sm h-5'>
                    {
                        MenuList.map((item, i) => <>
                            {i !== 0 && <Separator orientation="vertical" />}
                            <Link key={item.text} href={item.href}>{item.text}</Link>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;