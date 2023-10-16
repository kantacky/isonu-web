'use client'

import QRCode from '@/components/qrcode'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Client({
    room_id,
}: {
    room_id: string
}) {
    const searchParams = useSearchParams()
    const as: string = searchParams.get('as') ?? 'audience'
    const url: string = `https://isonu.kantacky.com/rooms/${room_id}?as=${as}`

    return (
        <div className='grid place-items-center h-screen p-4'>
            <Link href={url}>
                <p className='border-b p-1'>{url}</p>
            </Link>

            <QRCode url={url} />

            <Link href={'https://apps.apple.com/us/app/s-on-u/id6469441884'}>
                <Image src='/app-store-badge.svg' width={128} height={128} alt={'App Store Badge'} />
            </Link>

            <Link href={'https://testflight.apple.com/join/AF3uqqfD'}>
                <p className='border-b p-1'>Join the beta testing on Testflight</p>
            </Link>
        </div>
    )
}
