export interface Ativo {
    id : number,
    nome: string,
    categoria: string,
    status: "Disponível" | "Reservado",
    imagem_url: string
}