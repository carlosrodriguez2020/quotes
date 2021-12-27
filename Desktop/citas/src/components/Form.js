import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [appointment, setAppointment] = useState({
        pet: '',
        owner:'',
        date:'',
        time:'',
        symptom:'',

    });

    const [error, setError] = useState (false);
    
    const updateState = e => {
        setAppointment({ 
        ...appointment,   
        [e.target.name] : e.target.value})
    }
    const {pet, owner,date, time,symptom} = appointment;

    const subAppoitment = e => {
        e.preventDefault()
        //validar
        if(pet.trim()=== "" || owner.trim()=== "" || date.trim()=== "" || time.trim()=== "" || symptom.trim()=== ""){
            setError(true)
            return;
        }
        //eliminar msj
        setError(false)

        //asignar id
        // appointment.id = uuid.v4();
        appointment.id=29;
        console.log(appointment)
        //Crerar Cita

        //limpiar formulario

    }

    return (
        <>
            <h2>Form</h2>
                {
                    error ? <p className="alerta-error">Todos Los campos son obligatorios</p> : null
                }
            <form
                onSubmit={subAppoitment}
            >
                <label>Pet's name</label>
                <input
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Kurama"
                onChange={updateState}
                value={pet}
                />

                <label>Owner's name</label>
                <input
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Naruto"
                onChange={updateState}
                value={owner}
                />

                <label>Date</label>
                <input
                type="date"
                name="date"
                className="u-full-width"
                onChange={updateState}
                value={date}
                />

                <label>Hour</label>
                <input
                type="time"
                name="time"
                className="u-full-width"
                onChange={updateState}
                value={time}
                />

                <label>Symptom</label>
                <textarea
                type="text-area"
                name="symptom"
                className="u-full-width"
                placeholder="Demon trapped inside a child by the fourth hokage."
                onChange={updateState}
                value={symptom}
                />

                <button type="submit" className="u-full-width button-primary">Add appointment</button>
            </form>
        </>
    )}
 
export default Form;
