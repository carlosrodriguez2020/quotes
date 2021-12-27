import React,{Fragment, useState} from "react";
import Form from "./components/Form";
import ReservationMade from "./components/ReservationMade"


const App = () => {

  const [appointments, setAppointments] = useState([]);



   const creatAppointment = appointment =>{
    console.log(appointment)

    setAppointments([
      ...appointments,
      appointments

    ]);

    console.log(appointment)

  }

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
          <ReservationMade 
          
          />

        </div>
      </div>

     </section>

   </Fragment>
  );
}

export default App;
