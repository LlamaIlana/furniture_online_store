import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Validation
const validate = (values) => {
  const errors = {};

  // Recipient Name
  if (!values.recipientName) {
    errors.recipientName = "*Required";
  } else if (values.recipientName.length > 15) {
    errors.recipientName = "*Must be 15 characters or less";
  }

  // Recipient Number
  if (values.recipientNumber) {
    if (!/^[0-9]+$/.test(values.recipientNumber)) {
      errors.recipientNumber = "*Phone number must contain only digits";
    } else if (values.recipientNumber.length < 10) {
      errors.recipientNumber = "*Phone number must be at least 10 digits";
    } else if (values.recipientNumber.length > 15) {
      errors.recipientNumber = "*Phone number must be 15 digits or less";
    }
  }

  // Street Address
  if (!values.streetAddress) {
    errors.streetAddress = "*Required";
  }

  // Suburb
  if (!values.suburb) {
    errors.suburb = "*Required";
  }

  // City
  if (!values.city) {
    errors.city = "*Required";
  }

  // Province
  if (!values.province) {
    errors.province = "*Required";
  }

  // Postal Code
  if (!values.postalCode) {
    errors.postalCode = "*Required";
  } else if (!/^[0-9]+$/.test(values.postalCode)) {
    errors.postalCode = "*Postal Code must contain only digits";
  }

  return errors;
};

const AddressForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      recipientName: "",
      recipientNumber: "",
      streetAddress: "",
      complexBuilding: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitted(true);
      console.log("Form Submitted", values);
    },
  });

  const handleCancel = () => {
    navigate("/shipping");
  };

  return (
    <div className="delivery-form">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="recipientName">Recipient Name</label>
          <input
            id="recipientName"
            name="recipientName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.recipientName}
            placeholder="Recipient Name"
          />
          {formik.touched.recipientName && formik.errors.recipientName && (
            <div>{formik.errors.recipientName}</div>
          )}
        </div>

        <div>
          <label htmlFor="recipientNumber">Recipient Number</label>
          <input
            id="recipientNumber"
            name="recipientNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.recipientNumber}
            placeholder="Recipient Number"
          />
          {formik.touched.recipientNumber && formik.errors.recipientNumber && (
            <div>{formik.errors.recipientNumber}</div>
          )}
        </div>

        <div>
          <label htmlFor="streetAddress">Street Address</label>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streetAddress}
            placeholder="Street Address"
          />
          {formik.touched.streetAddress && formik.errors.streetAddress && (
            <div>{formik.errors.streetAddress}</div>
          )}
        </div>

        <div>
          <label htmlFor="complexBuilding">Complex or Building</label>
          <input
            id="complexBuilding"
            name="complexBuilding"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.complexBuilding}
            placeholder="Complex or Building Name"
          />
          {formik.touched.complexBuilding && formik.errors.complexBuilding && (
            <div>{formik.errors.complexBuilding}</div>
          )}
        </div>

        <div>
          <label htmlFor="suburb">Suburb</label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.suburb}
            placeholder="Suburb"
          />
          {formik.touched.suburb && formik.errors.suburb && (
            <div>{formik.errors.suburb}</div>
          )}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            placeholder="City"
          />
          {formik.touched.city && formik.errors.city && (
            <div>{formik.errors.city}</div>
          )}
        </div>

        <div>
          <label htmlFor="province">Province</label>
          <input
            id="province"
            name="province"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.province}
            placeholder="Province"
          />
          {formik.touched.province && formik.errors.province && (
            <div>{formik.errors.province}</div>
          )}
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
            placeholder="Postal Code"
          />
          {formik.touched.postalCode && formik.errors.postalCode && (
            <div>{formik.errors.postalCode}</div>
          )}
        </div>
    {/* Submit Button */}

        <button type="submit">Submit</button>
        {isSubmitted && <div>Form successfully submitted!</div>}
    {/* Cancel Button */}
    <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
