import React, { useState } from 'react';
import './App.css';

function MyForm() {

  const [data, setData] = useState({
    name: "",
    age: "",
    email: ""
  })
  const [allRecord, setAllRecord] = useState([]);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  const Setting = (event) => {
    const { name, value } = event.target
    setData((data) => {
      return {
        ...data,
        [name]: value
      }
    })

    // setData.name(e.target.value);
    //    setData.age(e.target.value);
    //   setData.email(e.target.value);
  }

  const AddNewUser = () => {
    // debugger;
    let error = document.getElementById("error");
    error.style.color = "red";

    if (data.name.length == 0 || data.email.length == 0 || data.age.length == 0 || data.name.value === "" || data.age.value === "" || data.email.value === "") {
      error.textContent = "Please enter all the details";
    }
    else {
      error.textContent = "";
      const found = allRecord.find(element => element.email == data.email);
      if (!found) {
        setAllRecord([...allRecord, data]);
      }
      else {
        error.textContent = ("'" + data.email + "' email already exist, kindly add details using different email address");
      }
    }
  }

  return (
    <>
      <form>
        <span id="error"></span>

        <br />
        <br />

        <label>Enter your name:
        <input id="name" type="text" name="name" value={data.name} onChange={Setting} placeholder="Your name.." />
        </label>

        <br />

        <label>Enter your Age:
        <input id="age" type="number" name="age" value={data.age} onChange={Setting} placeholder="Your Age.." />
        </label>

        <label>Enter your Email:
        <input id="email" type="email" name="email" value={data.email} onChange={Setting} placeholder="Your Email.." />
        </label>

      </form>
      <br />
      <button type="submit" onClick={AddNewUser}>ADD</button>
      <br />
      <br />


      <div id="managerTable">
        <table>
          <thead>
            <tr>
              <th >Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          {allRecord.map((v, i) => {
            return (<tr key={i}>
              <td>{v.name}</td>
              <td>{v.age}</td>
              <td>{v.email}</td>
            </tr>)
          })}
        </table>
      </div>
    </>

  )
}

export default MyForm