//arquivo do servidor
import express from "express";
import routes from "./src/routes/routes.js";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato preguiçoso tomando sol",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Paisagem montanhosa incrível",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Cachorro brincando na praia",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Comida deliciosa",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 6,
    descricao: "Citação inspiradora",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 7,
    descricao: "Arte abstrata colorida",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando");
});
