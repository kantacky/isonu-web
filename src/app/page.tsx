import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className='container mx-auto p-4 h-screen'>
            <p className='text-2xl font-bold my-8'>!&#39;s on U</p>

            <Link href={'https://apps.apple.com/us/app/s-on-u/id6469441884'}>
                <Image className='my-8' src='/app-store-badge.svg' width={128} height={128} alt={'App Store Badge'} />
            </Link>

            <Link href={'https://testflight.apple.com/join/AF3uqqfD'}>
                <p className='my-8 border-b p-1'>Join the beta testing on Testflight</p>
            </Link>
        </main>
    )
}
