import { Link } from "react-router-dom";

export function Navegacion() {
  return (
    <div className="flex justify-between py-3">
        <Link to={"/tareas"}><h1 className="font-bold text-3x1 mb-4">App de tareas</h1></Link>
        <button className="bg-indigo-800 px-3 py-2 rounded-3xl">
        <Link to={"/tareas_crear"}>Crear tarea</Link>
        </button>
    </div>
  )
}
