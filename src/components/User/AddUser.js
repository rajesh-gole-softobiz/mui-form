import React, { useState } from "react";
import { Grid, Paper, Button, Typography, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/UserSlice";

const AddUser = () => {
  const paperStyle = { padding: "0 15px 40px 15px", width: 250 };
  const btnStyle = { marginTop: 10 };
  const phoneRegExp = /^[2-9]{2}[0-9]{8}/;

  const dispatch = useDispatch();

  const [initialValues, setIntialvalues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Enter valid Phone number")
      .required("Required"),
  });
  const numberofUsers = useSelector((state) => state.usersReducer.users.length);
  console.log("numberofUsers", numberofUsers - 1);

  const onSubmit = (values) => {
    setIntialvalues(values)
    const name = values.name;
    const email = values.email;
    const phone = values.phone;

    const user = { name, email, phone };

    dispatch(addUser(user));
  };
  console.log("initialValues", initialValues);
  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption">Fill new user details here</Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, values, setFieldValue, errors, touched }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                error={errors.name && touched.name}
                helperText={<ErrorMessage name="name" />}
                required
                onChange={(e) => {
                  setFieldValue(e.target.name, e.target.value);
                }}
              />

              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                error={errors.email && touched.email}
                helperText={<ErrorMessage name="email" />}
                required
              />

              <Field
                as={TextField}
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={<ErrorMessage name="phoneNumber" />}
                required
              />

              <Button
                type="submit"
                style={btnStyle}
                variant="contained"
                color="primary"
              >
                Save User
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default AddUser;
