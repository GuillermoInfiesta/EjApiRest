import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModel } from '../collections/Personaje.ts';

export const getPersonaje = async(req:Request, res:Response) => {
    const id = req.params.id;
    const personaje = await PersonajeModel.findOne().where("_id").equals(id).exec();

    if(!personaje){
        res.status(404).send("Error 404: Personaje NOT FOUND");
        return;
    }

    res.statis(200).send(personaje);
}