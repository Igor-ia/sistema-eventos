import { EventCard } from "./components/EventCard"
import { Footer } from "./components/Footer"
import { HomeSearchBar } from "./components/HomeSearchBar"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div className="h-screen w-full">
      <Navbar />
      <HomeSearchBar />
      <main className="flex flex-col m-14">
        <h2 className="text-4xl">Próximos Eventos</h2>
        <p>Veja os eventos dos próximos dias</p>
        <div className="my-5 grid grid-cols-4 gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
