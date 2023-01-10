export function EventCard() {
    return (
        <div className="w-[300px] rounded-t-xl overflow-hidden border shadow-md">
            <img src="/img/img.jpg" className="w-full" alt="" />
            <div className="p-2">
                <span className="py-8 text-sm text-gray-300">28/10/2022</span>

                <h1 className="text-2xl">Evento</h1>

                <p className="text-md text-gray-400">0 Participantes</p>

                <button className="p-1 my-2 bg-orange-300 rounded-md border-2 border-orange-500 text-white">Saber Mais</button>
            </div>

        </div>
    )
}