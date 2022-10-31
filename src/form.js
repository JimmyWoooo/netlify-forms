import { useState } from "react"

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const Form  = () =>{
    const [state, setState] = useState({
      name: "",
      email: "",
      message: ""
    })

    const handleSubmit = e => {
      e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
    };

    const handleChange = e => setState({ [e.target.name]: e.target.value });

    return(
      <form onSubmit={handleSubmit}>
      <p>
        <label>
          Your Name: <input type="text" name="name" value={state.name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" value={state.email} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" value={state.message} onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    )
}

export default Form;