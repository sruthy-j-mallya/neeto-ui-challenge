import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { VALIDATION_SCHEMA, ROLES } from "../constants";

const Form = ({ onClose, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      onClose();
      Toastr.success("Contact added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter email address"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
