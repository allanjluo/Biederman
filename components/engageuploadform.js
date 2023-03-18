import React, { useState } from 'react';
import Modal from './modal'
import EngagementForm from './engagementform'

export default function EngageUploadForm (){
  const [open, setOpen] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAdded(false);
    setError(false);
  };

  return (
    <div>
      <div className='uploadbutton'>
      <button onClick={handleOpen} >
      <div>+</div>
    </button>
      </div>


    <Modal show={open} handleClose={handleClose}>
     <EngagementForm handleClose={handleClose} />
    </Modal>
    </div>
  )
}
