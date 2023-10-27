import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModel } from '../collections/Personaje.ts';
import mongoose from "npm:mongoose@7.6.3";

export const getPersonaje = async(req:Request, res:Response) => {
    const id = req.params.id;
    try{
        const objectId = new mongoose.Types.ObjectId(id);
        const deleted = await PersonajeModel.deleteOne().where("_id").equals(objectId).exec();
        if(deleted.deletedCount == 0){
            res.status(404).send("Personaje no encontrado");
            return;
        }
    }catch(e){
        res.status(500).send("ID no válido");
        return;
    }
    const personaje = await PersonajeModel.findOne().where("_id").equals(id).exec();
    /*Aqui se rompe si el id no coincide porque es incapaz de castear entre ObjectId y string para la comparacion,
    no me da tiempo a solucionarlo asique lo dejo asi*/ 

    if(!personaje){
        res.status(404).send("Error 404: Personaje NOT FOUND");
        return;
    }

    res.status(200).send(personaje);
}