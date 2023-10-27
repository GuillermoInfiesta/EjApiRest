import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModelType, PersonajeModel} from '../collections/Personaje.ts';

export const postPersonaje = async(req: Request, res: Response) => {
    const body: Partial<Omit<PersonajeModelType, "_id">> = req.body;
    const {nombre, raza, descripcion, habilidades} = body;
    if(!nombre || !raza || !descripcion || !habilidades){
        res.status(500).send("Error 500: Parameters MISSING");
        return;
    }

    if(!["Hobbit", "Elfo", "Humano", "Enano", "Ent"].includes(raza)){
        res.status(500).send("Error 500: Raza no valida");
        return;
    }

    const newPersonaje = await PersonajeModel.create({ 
        nombre,
        raza,
        descripcion,
        habilidades
    });

    res.status(200).send("Personaje añadido");
}