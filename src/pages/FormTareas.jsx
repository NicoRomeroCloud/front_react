import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { actualizarTarea, crearTareas, eliminarTarea, obtenerTarea } from "../api/tareas.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export function FormTareas() {

    const { register, handleSubmit, formState: {
        errors
    },
        setValue
    } = useForm();

    const navegar = useNavigate();
    const params = useParams();
    console.log(params)

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await actualizarTarea(params.id, data);
            toast.success('Tarea actualizada...', {
                position: "top-right",
            },
            )
        } else {
            await crearTareas(data);
            toast.success('Tarea creada...', {
                position: "top-right",
            },
            )
        }
        navegar('/tareas');

    })

    useEffect(() => {
        async function cargarTarea() {
            if (params.id) {
                const res = await obtenerTarea(params.id);
                setValue('titulo', res.data.titulo);
                setValue('descripcion', res.data.descripcion);
            }
        }
        cargarTarea();
    }, []);
    const MySwal = withReactContent(Swal);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Título"
                    {...register("titulo", { required: true })}
                    className="bg-zinc-800 p-3 rounded-md block w-full mb-3"
                />
                {errors.titulo && <span>El título de la tarea es requerido</span>}
                <textarea rows="3" placeholder="Descripción"
                    {...register("descripcion", { required: true })}
                    className="bg-zinc-800 p-3 rounded-md block w-full mb-3"

                ></textarea>
                {errors.descripcion && <span>La descripción de la tarea es requirida</span>}
                <button className="bg-indigo-700 p-3 rounded-md block w-full mt-4">Guardar</button>
            </form>

            {params.id && 
            (
                <div className="flex justify-end">
                    <button
                className="bg-red-700 p-3 rounded-md w-48 mt-4"
                onClick={() => {

                    MySwal.fire({
                        title: 'Estas seguro?',
                        text: `Su tarea será eliminada`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, eliminar!'
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Eliminado!',
                                `Su tarea ${params.id} ha sido eliminada`,
                                'success'
                            ),
                                await eliminarTarea(params.id)
                            navegar('/tareas');
                            toast.success('Tarea eliminada...', {
                                position: "top-right",
                            },
                            )

                        }
                        navegar('/tareas');
                        
                    })
                }}>Eliminar</button>
                </div>
            )}
        </div>
    )
}