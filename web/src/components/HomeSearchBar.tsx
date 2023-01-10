export function HomeSearchBar() {
    return (
        <div className="w-full h-[400px] p-12 text-center bg-cover bg-center bg-[url('/img/banner.jpg')]">
            <h1 className="text-5xl text-orange-500 mb-8">Busque um evento</h1>
            <form className="w-1/2 mx-auto">
                <input className="w-full p-1 rounded" type="text" placeholder="Procurar..." />
            </form>
        </div>
    )
}