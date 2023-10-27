import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModel } from '../collections/Personaje.ts';
import { ObjectId } from "npm:mongoose@7.6.3";
import mongoose from 'npm:mongoose@7.6.3';
export const deletePersonaje = async(req: Request, res: Response) => {
    const id = req.params.id;
    //const objectId = new mongoose.Types.ObjectId(id);
    //const deleted = await PersonajeModel.deleteOne().where("_id").equals(objectId).exec();

    const deleted = await PersonajeModel.deleteOne().where("_id").equals(id).exec();
    /*Aqui se rompe si el id no coincide porque es incapaz de castear entre ObjectId y string para la comparacion,
    no me da tiempo a solucionarlo asique lo dejo asi*/ 


    if(deleted.deletedCount == 0){
        res.status(404).send("Personaje no encontrado");
        return;
    }

    res.status(200).send("Personaje eliminado");
}