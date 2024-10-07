import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Add = ({props}) => {
  const [product, SetProduct] = useState({
    productName:props.productName,
    price:props.price,
    rate:props.rate
  });

  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Check if productName is empty
    if (!product.productName.trim()) {
      formErrors.productName = "Product name is required";
      isValid = false;
    }

    // Check if price is a number and greater than 0
    if (!product.price || isNaN(product.price) || product.price <= 0) {
      formErrors.price = "Valid price is required";
      isValid = false;
    }

    // Check if rate is a number between 1 and 5
    if (!product.rate || isNaN(product.rate) || product.rate < 1 || product.rate > 5) {
      formErrors.rate = "Rate must be between 1 and 5";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  let fetchValue = (event) => {
    SetProduct({ ...product, [event.target.name]: event.target.value });
  };

  const sendData = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(product);
      // Proceed with form submission or API call
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <TextField
          id="standard-basic"
          label="Product Name"
          variant="standard"
          name='productName'
          value={product.productName}
          onChange={fetchValue}
          error={!!errors.productName} // Display error state
          helperText={errors.productName} // Display error message
        /><br />

        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          name='price'
          value={product.price}
          onChange={fetchValue}
          error={!!errors.price}
          helperText={errors.price}
        /><br />

        <TextField
          id="standard-basic"
          label="Rate"
          variant="standard"
          name='rate'
          value={product.rate}
          onChange={fetchValue}
          error={!!errors.rate}
          helperText={errors.rate}
        /><br />

        <br />

        <Button
          variant="contained"
          sx={{ backgroundColor: '#f73378' }}
          type="submit"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default Add;
