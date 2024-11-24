import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Função assincrona para buscar todos os posts do banco de dados
export default async function getTodosPosts() {
  // Conecta ao banco de dados "imersao-instabyte" e à coleção "posts"
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");

  // Realiza uma consulta para encontrar todos os documentos (posts) na coleção
  // e retorna os resultados como um array
  return colecao.find().toArray();
}