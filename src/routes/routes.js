import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());
  // Define uma rota GET para o endpoint "/posts" (para buscar)
  app.get("/posts", listarPosts);
  // Define uma rota para criar um novo Post
  app.post("/posts", postarNovoPost);
};

export default routes;
