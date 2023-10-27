import express from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"
import { getAllPersonajes } from './resolvers/getAllPersonajes.ts';
import { getPersonaje } from './resolvers/getPersonaje.ts';
import { deletePersonaje } from './resolvers/deletePersonaje.ts';
import { postPersonaje } from './resolvers/postPersonaje.ts';
import { putPersonaje } from './resolvers/putPersonaje.ts';

try{
  await mongoose.connect("mongodb+srv://UserClasesArquitectura:UserClasesArquitectura@cluster0.jgt9boz.mongodb.net/Practica2?retryWrites=true&w=majority&appName=AtlasApp");
  }catch(e){ 
    console.log(e);
  }
  console.log("Conexión establecida"); 

const miapp = express();

miapp.use(express.json())


miapp
  .delete("/api/tierramedia/personajes/:id", deletePersonaje)
  .get("/api/tierramedia/personajes", getAllPersonajes)
  .get("/api/tierramedia/personajes/:id", getPersonaje)
  .post("/api/tierramedia/personajes", postPersonaje)
  .put("/api/tierramedia/personajes/:id", putPersonaje)

miapp.listen(3000);
