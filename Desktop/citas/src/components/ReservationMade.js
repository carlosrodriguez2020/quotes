import React from "react"


const ResercationMade = ({appointment,deleteAppointment}) => {

    return(
    <div className="cita">
        <p>Pet's name:<span>{appointment.pet}</span></p>
        <p>Owner's name:<span>{appointment.owner}</span></p>
        <p>Date:<span>{appointment.date}</span></p>
        <p>Hour:<span>{appointment.time}</span></p>
        <p>Symptom:<span>{appointment.symptom}</span></p>
        <button
        className="button eliminar u-full-width"
        onClick={()=>deleteAppointment(appointment.id)}
        >Delete appointment</button>
    </div>
    

    )



}

export default ResercationMade;