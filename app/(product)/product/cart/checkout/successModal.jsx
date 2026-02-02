'use client'
import Link from 'next/link';
import classes from './modal.module.css'

const SuccessModal = ({ onClose }) => {
  return (
    <div className={classes.modalContainer}>
        <div className={classes.modal}>
            <h2>Order placed successfully...</h2>
            <button onClick={onClose}><Link href={'/'}>close</Link></button>
        </div>
    </div>
  );
};

export default SuccessModal;