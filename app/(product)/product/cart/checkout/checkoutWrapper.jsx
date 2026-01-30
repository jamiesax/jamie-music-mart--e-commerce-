'use client'
import CheckOutForm from "./checkoutForm";
import SuccessModal from "./successModal";
import { useState } from "react";


const CheckoutWrapper = () => {

    const [ showModal, setShowModal ] = useState(false);
    
  return (
    <>
    <CheckOutForm onSuccess={() => {
             setShowModal(true)} }/>

    {showModal && (
        <SuccessModal onClose={() => setShowModal(false)} />)}
    </>
  );
};

export default CheckoutWrapper;