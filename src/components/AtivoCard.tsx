import type { Ativo } from "../types/Ativo"

interface Props {
  ativo: Ativo
  reservar: (id: number) => void
  cancelar: (id: number) => void
}

export function AtivoCard({ ativo, reservar, cancelar}: Props) {

  return (

    <div className="card">

      <img src={ativo.imagem_url}/>

      <div>
        <h3>{ativo.nome}</h3>
        <p>{ativo.categoria}</p>
        <p>Status: {ativo.status}</p>
      </div>

      <div className="botoes">
        <button disabled={ativo.status === "Reservado"} onClick={() => reservar(ativo.id)}>Reservar</button>
        <button disabled={ativo.status === "Disponível"} onClick={() => cancelar(ativo.id)}>Cancelar</button>
      </div>

    </div>

  )
}