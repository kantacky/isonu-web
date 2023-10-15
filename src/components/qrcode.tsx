'use client'

import { QRCodeCanvas } from 'qrcode.react'

export default function QRCode({
    url,
}: {
    url: string
}) {
    return (
        <QRCodeCanvas
            value={url}
            size={256}
            bgColor={'#FFFFFF'}
            fgColor={'#000000'}
            level={'H'}
            includeMargin={false}
            imageSettings={{
                src: '/favicon.ico',
                x: undefined,
                y: undefined,
                width: 24,
                height: 24,
                excavate: true,
            }}
        />
    )
}
