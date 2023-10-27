import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModel } from '../collections/Personaje.ts';

export const deletePersonaje = async(req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await PersonajeModel.deleteOne().where("_id").equals(id).exec();

    if(deleted.deletedCount == 0){
        res.status(404).send("Producto no encontrado");
        return;
    }

    res.status(200).send("Personaje eliminado");
}