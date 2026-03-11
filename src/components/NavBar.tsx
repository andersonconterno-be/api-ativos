interface Props {
  limparFiltro: () => void
  audiovisual: () => void
  espaco: () => void
  didatico: () => void
}

export function NavBar({ limparFiltro, audiovisual, espaco, didatico }: Props) {  
    return (
      <nav>
        <h1>Painel de Ativos</h1>
        <div className="filtros">
          <div className="limpar">
            <h3>Filtros</h3>
            <button onClick={() => limparFiltro()}>Limpar filtros</button>
          </div>
          <div className="filtros-btn">
            <button onClick={() => audiovisual()}>Audiovisual</button>
            <button onClick={() => espaco()}>Espaço Físico</button>
            <button onClick={() => didatico()}>Equipamento Didático</button>
          </div>
        </div>
      </nav>
  )
}