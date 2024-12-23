import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';


// Validation
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "*Invalid email address";
  }

  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 8) {
    errors.password = "*Must be 8 characters or more";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "*Must contain at least one uppercase letter";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password = "*Must contain at least one special character";
  }

  return errors;
};

const Login = ({ handleLogin }) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      username: "",  
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values.username); // Pass name to handleLogin instead of email
    },
  });

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Username:</label>
              <input
                id="username"  // Update id to "name"
                name="username"  // Use "name" for the field name
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              )}
            </div>
            <Button type="submit" variant="primary" onClick={handleCancel}>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};


export default Login;
