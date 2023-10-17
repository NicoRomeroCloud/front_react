import { useNavigate } from "react-router-dom";

export function TareasCard({tareas}) {

    const navegar = useNavigate();
    const valor = true;
    return (

        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() =>{
                navegar(`/tareas/${tareas.id}`)
            }}
        >
            
            <h1 className="font-bold uppercase">{tareas.titulo}</h1>
            <p className="text-slate-400">{tareas.descripcion}</p>
            <hr />
            </div>
            

    )
}   
