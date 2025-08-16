import Link from 'next/link';
import { Separator } from "./ui/separator"
import { Title, FooterList } from '../lib/constants'

function Footer(props) {
    console.log('Footer')
    return (
        <div className="border-t mt-6">
            <div className="container py-8 flex justify-between">
                <div className="text-2xl">
                    <Link href='/'> {Title}</Link>
                </div>
                <div className="flex grid-cols-3 gap-4">
                    {FooterList.map((item, i) => <>
                        {i !== 0 && <Separator orientation="vertical" />}
                        <div key={item.title} className="bg-amber-200">
                            <span>{item.title}</span>
                            <ul>
                                {item.list.map(l => <li key={`${i}-${l}`}>{l}</li>)}
                            </ul>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Footer;