import React, { useState } from "react";
import { useEffect } from "react";

const EmpManagement = () => {
  const data = JSON.parse(localStorage.getItem("EmployeeData")) || [];

  const [employeesList, setEmployeeList] = useState(data);

  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const [id, setId] = useState();

  useEffect(() => {
    localStorage.setItem("EmployeeData", JSON.stringify(employeesList));
  }, [employeesList]);

  return (
    <section
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Employee Database Management</h1>
        <button
          style={{
            padding: 5,
            borderRadius: "10px",
            border: "2px solid black",
            cursor: "pointer",
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Employee
        </button>
      </div>
      <section
        style={{
          marginTop: 20,
          border: "1px solid black",
          flex: 1,
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 0.5,
            padding: 10,
          }}
        >
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Employees List
          </h3>
          {employeesList?.length > 0 ? (
            <div
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {employeesList?.map((emp) => (
                <div
                  key={emp.id}
                  style={{
                    border: "1px solid black",
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: emp.isSelected && "black",
                    color: emp.isSelected && "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEmployee(emp);
                    const filterData = employeesList.map((data) => {
                      if (!data.isSelected && data.id === emp.id) {
                        return {
                          ...data,
                          isSelected: true,
                        };
                      } else {
                        return {
                          ...data,
                          isSelected: false,
                        };
                      }
                    });
                    setEmployeeList(filterData);
                  }}
                >
                  <p>{emp.name}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: 10,
                    }}
                  >
                    <button
                      style={{
                        padding: 5,
                        borderRadius: "10px",
                        cursor: "pointer",
                        border: "1px solid black",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setId(emp.id);
                        setIsEdit(true);
                        setName(emp.name);
                        setAddress(emp.address);
                        setMobile(emp.mobile);
                        setDob(emp.dob);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        padding: 5,
                        borderRadius: "10px",
                        cursor: "pointer",
                        border: "1px solid black",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const data = employeesList.filter(
                          (e) => e.id !== emp.id
                        );
                        setEmployeeList(data);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                marginTop: 10,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  textAlign: "center",
                }}
              >
                No Data
              </span>
            </div>
          )}
        </div>
        <div
          style={{
            flex: 1,
            padding: 10,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Employees Details
          </h3>
          {selectedEmployee.name ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                gap: 5,
                paddingBottom: 10,
              }}
            >
              <span>Name: {selectedEmployee?.name}</span>
              <span>Address: {selectedEmployee?.address}</span>
              <span>Mobile: {selectedEmployee?.mobile}</span>
              <span>DOB: {selectedEmployee?.dob}</span>
            </div>
          ) : (
            <div
              style={{
                marginTop: 10,
              }}
            >
              <span
                style={{
                  textAlign: "center",
                }}
              >
                No Data
              </span>
            </div>
          )}
        </div>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 100,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
              gap: 20,
              backgroundColor: "whitesmoke",
              borderRadius: 10,
              width: 350,
              height: 350,
            }}
          >
            <button
              style={{
                padding: 5,
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "red",
                color: "white",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onClick={() => {
                setOpen(false);
                setName("");
                setAddress("");
                setMobile("");
                setDob("");
              }}
            >
              Close
            </button>
            <input
              type={"text"}
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{
                color: "black",
                padding: 5,
                borderRadius: 10,
                border: "1px solid black",
                width: 200,
              }}
            />
            <input
              type={"text"}
              value={address}
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              style={{
                color: "black",
                padding: 5,
                borderRadius: 10,
                border: "1px solid black",
                width: 200,
              }}
            />
            <input
              type={"text"}
              value={mobile}
              placeholder="Mobile"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              maxLength={10}
              style={{
                color: "black",
                padding: 5,
                borderRadius: 10,
                border: "1px solid black",
                width: 200,
              }}
            />
            <input
              type={"date"}
              value={dob}
              placeholder="Date of birth"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              style={{
                color: "black",
                padding: 5,
                borderRadius: 10,
                border: "1px solid black",
                width: 200,
              }}
            />
            <button
              style={{
                padding: 5,
                borderRadius: "10px",
                border: "2px solid black",
                cursor: "pointer",
                width: 200,
              }}
              onClick={() => {
                if (isEdit) {
                  const data = employeesList.filter((data) => data.id !== id);
                  setEmployeeList([
                    ...data,
                    {
                      id: id,
                      name: name,
                      address: address,
                      mobile: mobile,
                      dob: dob,
                    },
                  ]);
                } else {
                  setEmployeeList((prev) => [
                    ...prev,
                    {
                      id: Math.random(),
                      name: name,
                      address: address,
                      mobile: mobile,
                      dob: dob,
                    },
                  ]);
                }
                setOpen(false);
                setName("");
                setAddress("");
                setMobile("");
                setDob("");
                setIsEdit(false);
                setId("");
              }}
            >
              Submit
            </button>
          </div>
        )}
      </section>
    </section>
  );
};

export default EmpManagement;
