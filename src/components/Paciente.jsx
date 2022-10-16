const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, alta, sintoma, id} = paciente
    const handleEliminar = () => {
        const respuesta = confirm('¿Está seguro de eliminar el paciente?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{sintoma}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    className="py-2 px-5 bg-indigo-600 hover:bg-indigo-800 uppercase text-white font-bold rounded-md"
                    onClick={() => setPaciente(paciente)}>Editar
                </button>
                <button
                    className="py-2 px-5 bg-red-600 hover:bg-indigo-800 uppercase text-white font-bold rounded-md"
                    onClick={handleEliminar}>Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente