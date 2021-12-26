import React from "react";

const Form = () => {
    return (
        <>
            <h2>Form</h2>
            <form>
                <label>Pet's name</label>
                <input
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Kurama"
                />

                <label>Owner's name</label>
                <input
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Naruto"
                />

                <label>Date</label>
                <input
                type="date"
                name="date"
                className="u-full-width"
                />

                <label>Hour</label>
                <input
                type="time"
                name="time"
                className="u-full-width"
                />

                <label>Symptom</label>
                <textarea
                type="text-area"
                name="symptom"
                className="u-full-width"
                placeholder="Demon trapped inside a baby by the fourth hokage"
                />

                <button type="submit" className="u-full-width button-primary">Add appointment</button>
            </form>
        </>
    )}
 
export default Form;
