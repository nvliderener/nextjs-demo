import Link from 'next/link';
import { Separator } from "./ui/separator"
import { Title, FooterList } from '../lib/constants'
import { Fragment } from 'react';
function Footer() {
    console.log('Footer')
    return (
        <div className="border-t mt-6">
            <div className="container py-8 flex justify-between">
                <div className="text-2xl">
                    <Link href='/'> {Title}</Link>
                </div>
                <div className="flex gap-4">
                    {FooterList.map((item, i) => <Fragment key={item.title}>
                        {i !== 0 && <Separator orientation="vertical" />}
                        <div>
                            <span>{item.title}</span>
                            <ul>
                                {item.list.map(l => <li key={`${i}-${l}`}>{l}</li>)}
                            </ul>
                        </div>
                    </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Footer;