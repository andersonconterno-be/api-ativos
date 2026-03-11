import { useEffect, useState } from "react"
import type { Ativo } from "./types/Ativo"
import { NavBar } from "./components/NavBar"
import { AtivoCard } from "./components/AtivoCard"
import { api } from "./api/api"
import "./App.css"

function App() {

  const [ativos, setAtivos] = useState<Ativo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchAtivos() {

      const response = await api.get("/ativos")

      setAtivos(response.data)

      setLoading(false)

    }

    fetchAtivos()

  }, [])

  async function reservar(id: number) {

    await api.patch(`/ativos/${id}`, {
      status: "Reservado" as const
    })
    
    const novosAtivos = ativos.map((item) => {

      if (item.id === id) {
        return { ...item, status: "Reservado" as const}
      }

      return item

    })

    setAtivos(novosAtivos)

  }

  async function cancelar(id:number) {
    
    await api.patch(`/ativos/${id}`, {
      status: "Disponível" as const
    })

    const novosAtivos = ativos.map((item) => {

      if (item.id === id) {
        return { ...item, status: "Disponível" as const}
      }

      return item

    })

    setAtivos(novosAtivos)

  }

  async function filtrarAudiovisual() {

    const {data} = await api.get('/ativos?categoria=Audiovisual')

    setAtivos(data)

  }

  async function filtrarEspaco() {

    const {data} = await api.get('/ativos?categoria=Espaço Físico')
    
    setAtivos(data)

  }

  async function filtrarDidatico() {

    const {data} = await api.get('/ativos?categoria=Equipamento Didático')

    setAtivos(data)

  }

  async function limparFiltro() {
    
    const {data} = await api.get('/ativos')

    setAtivos(data)
    
  }

  if (loading) {
    return <h2>Carregando...</h2>
  }

  return (

    <div>
      <NavBar
        limparFiltro={limparFiltro}
        audiovisual={filtrarAudiovisual}
        espaco={filtrarEspaco}
        didatico={filtrarDidatico}
      />

      <div className="grid">

        {ativos.map((ativo) => (
          <AtivoCard
            key={ativo.id}
            ativo={ativo}
            reservar={reservar}
            cancelar={cancelar}
          />
        ))}

      </div>

    </div>

  )
}

export default App