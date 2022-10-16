import {useEffect, useState} from "react";
import Error from "./Error.jsx";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('');
    const [sintoma, setSintoma] = useState('')
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, propietario, email, alta, sintoma].includes('')) {
            setError(true)
            return
        }
        setError(false)
        const pacienteData = {nombre, propietario, email, alta, sintoma}
        if (paciente.id) {
            // Editar
            pacienteData.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === pacienteData.id ? pacienteData : pacienteState)
            setPacientes(pacientesActualizados)
        } else {
            //Agregar
            pacienteData.id = generarId()
            setPacientes([...pacientes, pacienteData])
        }
        setPaciente({})
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintoma('')
    }

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintoma(paciente.sintoma)
        }
    }, [paciente])

    const generarId = () => {
        const date = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2)
        return date + random
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Segimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes
                y{" "}<span className="text-indigo-600 font-bold">Administralos</span></p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                {error && <Error><p>Todos los campos son obligatorios</p></Error>
                }
                <div className="mb-5">
                    <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold">Nombre
                        Mascota</label>
                    <input id="nombreMascota" type="text" placeholder="Nombre de la Mascota"
                           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre}
                           onChange={e => setNombre(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold">Nombre
                        Propietario</label>
                    <input id="nombrePropietario" type="text" placeholder="Nombre del Propietario"
                           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario}
                           onChange={e => setPropietario(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="emailContacto" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input id="emailContacto" type="email" placeholder="Email Contacto Propietario"
                           className="border-2 w-full p-2 mt-2 rounded-md" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input id="alta" type="date"
                           className="border-2 w-full p-2 mt-2 rounded-md" value={alta}
                           onChange={e => setAlta(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea id="sintomas"
                              className="border-2 w-full p-2 mt-2 rounded-md"
                              placeholder="Describe los Síntomas" value={sintoma}
                              onChange={e => setSintoma(e.target.value)}></textarea>
                </div>
                <input type="submit" value={paciente.id ? 'EDITAR PACIENTE' : 'AGREGAR PACIENTE'}
                       className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors"/>
            </form>
        </div>
    )
}

export default Formulario