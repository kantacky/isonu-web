'use client'

import QRCode from '@/components/qrcode'
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
        <div className=''>
            <a className='border-b' href={url}>{url}</a>

            <QRCode url={url} />
        </div>
    )
}