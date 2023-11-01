import React, { useState } from "react";
import "./SignUp.css"

const LocalStorage = [];

export const Render = () => {
    const [sign, setSign] = useState({
        Id: "",
        Pass: "",
        isCommunity : false
    })

    const Searcher = (name) => {
       return  LocalStorage.map((item) => {
            const Verdict = item.Id === name ? true : false
            console.log(Verdict)
            return Verdict
        })

    }

    const Storage = (event) => {
        event.preventDefault()
        if (() => Searcher(sign.Id)) {
            alert("You Already Have An Account Please Click On Sign In ")
        }
        else {
            sign.isCommunity === false
              ? console.log("You Unclicked The Community")
              : console.log("You Clicked the Community");
            LocalStorage.push(sign);
            console.log(LocalStorage);
        }
    }

    const Setter = (event) => {

        const {name,value,checked,type} = event.target

        setSign((prevInfo) => {
            return {
                ...prevInfo,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    return (
      <form onSubmit={(event) => Storage(event)} id="Form">
        <input
                type="text"
                id="ID"
          placeholder="Enter ID/Ph no/E mail/User name"
          name="Id"
          value={sign.Id}
          onChange={(event) => Setter(event)}
        ></input>
        <input
                type="text"
                id="Pass"
          placeholder="Enter Passcode"
          name="Pass"
          value={sign.Pass}
          onChange={(event) => Setter(event)}
        ></input>
        <div id="checkbox">
          <input
            type="checkbox"
            id="Community"
            name="isCommunity"
            checked = {sign.isCommunity}
            onChange={(event) => Setter(event)}
          ></input>
          <label htmlFor="Community">
            {" "}
            Wanna Get Updates From Our Commnity{" "}
          </label>
        </div>
        <button type="Submit">Sign Up</button>
      </form>
    );
}