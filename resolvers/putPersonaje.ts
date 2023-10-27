import {Request, Response} from "npm:express@4.18.2"
import { PersonajeModelType, PersonajeModel} from '../collections/Personaje.ts';

export const putPersonaje = async (req: Request, res: Response) => {
    const body: Partial<Omit<PersonajeModelType, "_id">> = req.body;
    const {nombre, raza, descripcion, habilidades} = body;

    const id = req.params.id;
    const personaje = await PersonajeModel.findOne().where("_id").equals(id).exec();

    if (!personaje){
        res.status(404).send("Error 404: Personaje NOT FOUND");
        return;
    }

    if(raza && !["Hobbit", "Elfo", "Humano", "Enano", "Ent"].includes(raza)){
        res.status(500).send("Error 500: Raza no valida");
        return;
    }

    const filter = {_id: id};
    const changes = {
        nombre: nombre,
        raza: raza,
        descripcion: descripcion,
        habilidades: habilidades
    }
    await PersonajeModel.findOneAndUpdate(filter, changes);

    res.status(200).send("Personaje actualizado")

}