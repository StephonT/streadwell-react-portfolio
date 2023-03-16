import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter, validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [formComplete, setFormComplete] = useState(false);
  // use effect to determine if a form is complete with values
  useEffect(() => {
    setFormComplete(
      Object.values(formState).every((input) => {
        return input;
      })
    );
  }, [formState]);

  // function to call when a form field loses focus
  // variable used to hold error message to avoid async issues
  function handleChange(e) {
    let errorText = "";
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        errorText = "Please enter a valid email.";
      }
    } else {
      if (!e.target.value.length) {
        errorText = `${capitalizeFirstLetter(e.target.name)} is required.`;
      }
    }
    if (errorText) {
      setErrorMessage(
        errorText,
        setFormState({ ...formState, [e.target.name]: "" })
      );
    } else {
      setErrorMessage(
        "",
        setFormState({ ...formState, [e.target.name]: e.target.value })
      );
    }
  }

  // handles submitting the form, verifies that there is currently no error message and the form is completed
  //not needed however because i am using getform.io
  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage && formComplete) {
      console.log(formState);
    }
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/57642a8e-4754-49ee-bbfb-b1dd0e0545a3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-amber-300 text-gray-300">
            Contact
          </p>
          <p className="text-amber-300 text-2xl pt-4">
            Submit the form below or shoot me an email directly. Click the following email /{" "}
            <a
              className="hover:text-4xl hover:text-white"
              href="mailto:streadwe@gmail.com"
            >
              streadwe@gmail
            </a>{" "}
          </p>
        </div>
        <input
          className="p-2"
          type="text"
          placeholder="Name"
          name="name"
          onBlur={handleChange}
        />
        <input
          className="my-4 p-2 "
          type="email"
          placeholder="Email"
          name="email"
          onBlur={handleChange}
        />
        <textarea
          name="message"
          className="p-2"
          rows="10"
          placeholder="Message"
          onBlur={handleChange}
        ></textarea>
        <span className="text-amber-300 text-2xl">{errorMessage}</span>
        <button className="text-white border-2 hover:bg-amber-300 hover:border-amber-400 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
