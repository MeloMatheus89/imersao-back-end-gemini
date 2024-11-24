import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Função assincrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
  // Conecta ao banco de dados "imersao-instabyte" e à coleção "posts"
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  // Realiza uma consulta para encontrar todos os documentos (posts) na coleção
  // e retorna os resultados como um array
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  const objectId = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objectId) }, { $set: novoPost });
}
