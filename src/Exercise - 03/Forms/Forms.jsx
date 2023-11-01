import React, { useState } from "react";

let Information = []

export const Render = () => {
    const [formdata, setFormdata] = useState({
        firstname: undefined,
        lastname: undefined,
        Email: undefined,
        comments: undefined,
        ischecked: true,
        employee: undefined,
        favColor : undefined
    })
  const Handler = (event) => {
      
        const {name , value, checked, type} = event.target

        setFormdata(prev => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

  const SubmitToVariable = (event) => {
      event.preventDefault()
    Information.push(formdata)
    console.log(Information)
    }
  

    return (
      <div>
        <form onSubmit={(event) => {SubmitToVariable(event)}}>
          <h1>Input In React</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={(event) => {
              Handler(event);
            }}
            value={formdata.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={(event) => {
              Handler(event);
            }}
            value={formdata.lastname}
          />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            value={formdata.Email}
            onChange={(event) => {
              Handler(event);
            }}
          />
          {formdata.firstname && formdata.lastname && (
            <p>{formdata.firstname + "" + formdata.lastname}</p>
          )}
          {formdata.Email && <p>{formdata.Email}</p>}

          <h1>Text Area In React</h1>

          <textarea
            value={formdata.comments}
            name="comments"
            placeholder="Comments"
            onChange={(event) => {
              Handler(event);
            }}
          />
          {formdata.comments && <p>{formdata.comments}</p>}

          <h1>CheckBox Buttons In React</h1>

          <input
            type="checkbox"
            id="isfriendly"
            name="ischecked"
            checked={formdata.ischecked}
            onChange={(event) => Handler(event)}
          />
          <label htmlFor="isfriendly"> Are You Friendly </label>

          <h1> Radio buttons in React</h1>

          <fieldset>
            <legend>The Employee Status : </legend>

            <input
              type="radio"
              id="fulltime"
              name="employee"
              value="Full Time"
              onChange={(event) => {
                Handler(event);
              }}
            />
            <label htmlFor="fulltime"> Full Time </label>
            <br></br>
            <input
              type="radio"
              id="parttime"
              name="employee"
              value="Part Time"
              onChange={(event) => {
                Handler(event);
              }}
            />
            <label htmlFor="parttime"> Part Time </label>
            <br></br>
            <input
              type="radio"
              id="retired"
              name="employee"
              value="Retired"
              onChange={(event) => {
                Handler(event);
              }}
            />
            <label htmlFor="retired"> Retired </label>
          </fieldset>

          {formdata.employee && <p>{formdata.employee}</p>}

          <h1> Select Box in React</h1>

          <label htmlFor="color" style={{ display: "block" }}>
            Choose A Color
          </label>
          <br></br>
          <select id="color"
            name="favColor"
            value={formdata.favColor}
            onChange={(event) => {Handler(event)}}
          >
            <option value=""> -- Choose -- </option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
          </select>

          {formdata.favColor && <p>{formdata.favColor}</p>}
          <br></br><br></br>
          <button type="Submit"> Submit </button>

        </form>
      </div>
    );
}