import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModel } from '../collections/Personaje.ts';
import { ObjectId } from "npm:mongoose@7.6.3";
import mongoose from 'npm:mongoose@7.6.3';
export const deletePersonaje = async(req: Request, res: Response) => {
    const _id = req.params.id;
    try{
        const objectId = new mongoose.Types.ObjectId(_id);
        const deleted = await PersonajeModel.deleteOne().where("_id").equals(objectId).exec();
        if(deleted.deletedCount == 0){
            res.status(404).send("Personaje no encontrado");
            return;
        }
    }catch(e){
        res.status(500).send("ID no válido");
        return;
    }
    res.status(200).send("Personaje eliminado");
}