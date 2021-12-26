import React,{Fragment} from "react";
import Form from "./components/Form";
import ReservationMade from "./components/ReservationMade"


const App = () => {
  return (
   <Fragment>
     <section className="container">
      <h1>Patient Administration</h1>
      
      <div className="row">
        <div className="one-half column">
          <Form />
        </div>
          <ReservationMade />
        <div className="one-half column">

        </div>
      </div>

     </section>

   </Fragment>
  );
}

export default App;
