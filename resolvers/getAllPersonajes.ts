import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModel } from '../collections/Personaje.ts';

export const getAllPersonajes = async (req: Request, res: Response) => {
    const personajes = await PersonajeModel.find({}).exec();
    if( personajes.length < 1){
        res.status(404).send("No existen productos");
        return;
    }
    res.status(200).send(personajes);
}