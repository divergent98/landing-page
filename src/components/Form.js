import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };
  return (
    <div className="flex justify-center content-center">
      <div className="w-full md:w-3/4 lg:w-3/4 custom-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input bg-black px-2 rounded-md custom-form-input mt-1 block w-full h-10 border-b-2 border-transparent focus:outline-none "
              placeholder="Your First Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="type"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="form-input bg-black px-2 rounded-md custom-form-input mt-1 block w-full h-10 border-b-2 border-transparent focus:outline-none "
              placeholder="Your Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input bg-black px-2 rounded-md custom-form-input mt-1 block w-full h-10 border-b-2 border-transparent focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className=" custom-form-button w-full text-white py-2 mt-5 px-4 rounded "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
