import { useEffect, useState } from "react"
import { obtenerTareas } from "../api/tareas.api";
import { TareasCard } from "./TareasCard";

export function ListaTareas(){

    const [tareas, setTareas] = useState([])

    useEffect(() => {
        async function cargarTareas(){
            const res = await obtenerTareas();
            setTareas(res.data);
            console.log(res.data)
        }
        cargarTareas();
    }, []);

    return(
        <div className="grid grid-cols-6 gap-3">
            {tareas.map(tareas => (
                <TareasCard tareas={tareas} key={tareas.id}></TareasCard>
            ))}
        </div>
        
    )
}