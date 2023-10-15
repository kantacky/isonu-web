import Client from './client'

export default function Room({
    params,
}: {
    params: { room_id: string }
}) {
    return (
        <main className='container mx-auto m-4'>
            <Client room_id={params.room_id} />
        </main>
    )
}
