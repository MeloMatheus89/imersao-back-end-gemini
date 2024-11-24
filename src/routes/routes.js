import express from "express";
import multer from "multer";
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
  atualizarUmNovoPost,
} from "../controllers/postsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });
//linux ou mac ele nomeia automaticamente o nome onde será salvo.

const routes = (app) => {
  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());
  // Define uma rota GET para o endpoint "/posts" (para buscar)
  app.get("/posts", listarPosts);
  // Define uma rota para criar um novo Post
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarUmNovoPost);
};

export default routes;
