import React,{Fragment, useState} from "react";
import Form from "./components/Form";
import ReservationMade from "./components/ReservationMade"


const App = () => {

  const [appointments, setAppointments] = useState([]);



  const creatAppointment = appointment =>{
    console.log(appointment)

    setAppointments([
      ...appointments,
      appointment
    ]);
  }
  
  const deleteAppointment = id =>{
    console.log(id)

    const newAppointment = appointments.filter(appointment=>(
      appointment.id !== id)
      )
      setAppointments(newAppointment)
  
  }
  const title = appointments.length === 0 ? "No appointments" : "Manage your appointments";
  return (
    <Fragment>
      <section className="container">
      <h1>Patient Administration</h1>
      
      <div className="row">
        <div className="one-half column">
          <Form 
          creatAppointment={creatAppointment}
          />
        </div>
        <div className="one-half column">
          <h2>{title}</h2>

          {appointments.map(appointment=>(
            <ReservationMade 
            appointment={appointment}
            key={appointment.id}
            deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>

      </section>

    </Fragment>
  );
}

export default App;
