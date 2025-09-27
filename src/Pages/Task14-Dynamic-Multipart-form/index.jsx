import React, { useState } from "react";

const MultipartForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      alert("Please fill Name and Email");
      return;
    }

    if (step === 2 && (!formData.address || !formData.city)) {
      alert("Please fill Address and City");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1 className="text-[25px]">
          {step === 1 ? "Personal Details" : "Address Details"}
        </h1>

        {step === 1 && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                padding: "5px 10px",
                marginBottom: "10px",
              }}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                padding: "5px 10px",
              }}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Review Your Details</h3>
            <p>
              <b>Name:</b> {formData.name}
            </p>
            <p>
              <b>Email:</b> {formData.email}
            </p>
            <p>
              <b>Address:</b> {formData.address}
            </p>
            <p>
              <b>City:</b> {formData.city}
            </p>
          </div>
        )}
        <div style={{ marginTop: "20px" }}>
          {step > 1 && (
            <button
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              onClick={() => {
                handleNextStep();
              }}
            >
              Next
            </button>
          )}
          {step === 3 && <button onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default MultipartForm;
