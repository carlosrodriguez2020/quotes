import React,{useState, useEffect} from "react";
import Form from "./components/Form";
import ReservationMade from "./components/ReservationMade";



const App = () => {

let nAppointment = JSON.parse(localStorage.getItem("appointments"));
if (!nAppointment){
nAppointment = [];
}
  
const [appointments, setAppointments] = useState(nAppointment);
  useEffect(() => {
    if(nAppointment){
    localStorage.setItem('appointments', JSON.stringify(appointments))
    }else{
    localStorage.setItem('appointments', JSON.stringify([]))
    }
    }, [nAppointment,appointments] );

  const creatAppointment = appointment =>{
    setAppointments([
    ...appointments,
    appointment
    ]);
  }
  
  const deleteAppointment = id =>{
    const newAppointment = appointments.filter(appointment=>(
      appointment.id !== id)
      )
      setAppointments(newAppointment);
    }
    const title = appointments.length === 0 ? "No appointments" : "Manage your            appointments";
    return (
    <>
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
    </>
  );
}

export default App;
