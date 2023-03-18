import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal displayBlock' : 'modal displayNone';

  return (
    <div className={showHideClassName}>
      <section className='modalMain'>
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal

