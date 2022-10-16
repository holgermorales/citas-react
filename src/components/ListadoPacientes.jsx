import Paciente from "./Paciente.jsx";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                        <p className="text-center text-xl mt-5 mb-10">Administra tus {' '}<span
                            className="font-bold text-indigo-600">Pacientes y Citas</span></p>
                        {pacientes.map(paciente => <Paciente key={paciente.id} paciente={paciente}
                                                             setPaciente={setPaciente}
                                                             eliminarPaciente={eliminarPaciente}/>)}
                    </>
                )
                : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                        <p className="text-center text-xl mt-5 mb-10">Comienza Agregando Pacientes y {' '}
                            <span className="text-indigo-600 font-bold">Aparecerán en este lugar</span>
                        </p>

                    </>
                )

            }

        </div>

    )
}
export default ListadoPacientes