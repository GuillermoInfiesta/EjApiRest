import mongoose from "npm:mongoose@7.6.3"

const Schema = mongoose.Schema;

const PersonajeSchema = new Schema({
    nombre: {type: String, required: true},
    raza: {type: String, required: true},
    descripcion: {type: String, required: true},
    habilidades: {type: Array<String>, required: true}
})

export type PersonajeModelType = {
    nombre: string,
    raza: string,
    descripcion: string,
    habilidades: string[],
    _id: mongoose.Types.ObjectId
}

export const PersonajeModel = mongoose.model<PersonajeModelType>(
    "personaje",
    PersonajeSchema,
)