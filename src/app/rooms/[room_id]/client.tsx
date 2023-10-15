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
        <div className='h-screen grid place-items-center'>
            <Link className='my-2 border-b p-1' href={url}>{url}</Link>

            <div className='my-2'>
                <QRCode url={url} />
            </div>

            <Link className='my-2' href={'https://apps.apple.com/us/app/s-on-u/id6469441884'}>
                <Image src='/app-store-badge.svg' width={128} height={128} alt={'App Store Badge'} />
            </Link>
        </div>
    )
}