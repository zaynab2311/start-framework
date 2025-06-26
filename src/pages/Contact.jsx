import React, { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const fields = [
    { id: "userName", type: "text", label: "userName" },
    { id: "userAge", type: "number", label: "userAge" },
    { id: "userEmail", type: "email", label: "userEmail" },
    { id: "userPassword", type: "password", label: "userPassword" },
  ];

  return (
    <section className="min-h-screen bg-white py-10 flex justify-center items-center my-24">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center px-4">
        <h2 className="uppercase text-4xl font-extrabold tracking-wider mb-6 text-center text-[#2c3e50]">
          contact section
        </h2>

        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-1 bg-[#2c3e50] mx-4"></div>
          <i className="fa-solid fa-star text-gray-800 text-xl"></i>
          <div className="w-16 h-1 bg-gray-800 mx-4"></div>
        </div>

        <form className="w-full lg:w-1/2 space-y-6">
          {fields.map(({ id, type, label }) => (
            <div key={id} className="relative pt-3">
              <input
                id={id}
                name={id}
                type={type}
                value={values[id]}
                onChange={handleChange}
                placeholder={label}
                className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#1abc9c] py-3 placeholder-black text-black"
              />
              <label
                htmlFor={id}
                className={`absolute left-0 text-[#1abc9c] text-sm font-medium transition-all duration-300 ${
                  values[id] ? "-top-6 opacity-100" : "top-3 opacity-0"
                }`}
              >
                {label} :
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="mt-6 bg-[#1abc9c] text-white px-6 py-2 rounded-md hover:bg-[#17a689] transition-colors duration-300"
          >
            send Message
          </button>
        </form>
      </div>
    </section>
  );
}
