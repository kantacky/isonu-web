import Client from './client'

export default function Room({
    params,
}: {
    params: { room_id: string }
}) {
    return (
        <main className=''>
            <Client room_id={params.room_id} />
        </main>
    )
}
