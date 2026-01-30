'use client'
import Link from 'next/link';
import classes from './page.module.css';
import { useState } from 'react';

const CheckOutForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: '',
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // if (!formData.email.trim() || !formData.email.includes('@')) {
    //   newErrors.email = 'Email is required';
    // }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.payment) newErrors.payment = 'Payment method is required';


    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);

    console.log('Validation result:', Object.keys(newErrors).length === 0, newErrors);


    return Object.keys(newErrors).length === 0;
    
  };

  const handleSubmit = (e) => {
    console.log('submitting...')
    e.preventDefault();

    if (!validate()) return;

    console.log('validation done')

    // console.log('Checkout data:', formData);
    onSuccess();
  };


  return (
    <div className={classes.body}>    
      <div className={classes.container}>
        
      <div className={classes.header}>
        <div className={classes.back}>
          <Link href="/product/cart"><button className={classes.checkoutBtn} >back</button></Link>
        </div>
        <h1 className={classes.heading}>Checkout Page</h1>
        <p className={classes.description}>This is where the checkout process will take place.
          <br />
          <span>Please fill in your details below to complete your purchase.</span>
        </p>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="name">Name:</label>
        <input className={classes.input} id="name" name="name" onChange={handleChange} value={formData.name} required />

        {errors.name && <p>{errors.name}</p>}

        <label className={classes.label} htmlFor='phone'>Phone:</label>
        <input className={classes.input} name='phone' id='phone' required  onChange={handleChange} value={formData.phone}/>

        {errors.phone && <p>{errors.phone}</p>}

        <label className={classes.label} htmlFor="payment">Payment Method:</label>
          <select className={classes.select} id="payment" name="payment" value={formData.payment} onChange={handleChange}>
          <option value=''>select a payment method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>

        <label className={classes.label} htmlFor="address">Address:</label>
        <textarea type="text" className={classes.input} id="address" name="address" onChange={handleChange} value={formData.address} required />

        {errors.address && <p>{errors.address}</p>}

        
        <button className={classes.button} type="submit">Submit</button>
        
      </form>
    </div>
    </div>
  );
};

export default CheckOutForm;