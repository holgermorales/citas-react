import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

function App() {
    const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    const [pacientes, setPacientes] = useState(INITIAL)
    const [paciente, setPaciente] = useState({})

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id)
        setPacientes(pacientesActualizados)
    }

    return (
        <div className="container mt-20 mx-auto">
            <Header/>
            <div className="mt-5 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
            </div>
        </div>

    )
}

export default App
