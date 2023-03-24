
import React from 'react'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage, db} from '../firebase/config.js'
import {
  addDoc,
  collection
} from "firebase/firestore";


export default function EngagementForm({handleClose}) {
  const [name, setName] = React.useState('')
  const [progress, setProgress] = React.useState(0);
  const [file, setFile] = React.useState(null)
  const [error, setError] = React.useState(null)

const [description, setDescription] = React.useState('')

const changeHandler = (e) => {
  let selected = e.target.files[0]
  const allowedTypes = ['image/png', 'image/jpeg']
  if (selected && allowedTypes.includes(selected.type)){
    setFile(selected)
    setError('')
  } else {
    setFile(null)
    setError('Please select an image file (png or jpeg)')
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  //
const storageRef = ref(Storage, 'images/' + file.name)
const uploadTask = uploadBytesResumable(storageRef, file)
uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
   setError(error)
  },
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      const docRef = await addDoc(collection(db, "Engagements"), {
        name: name,
        description: description,
        url: downloadURL
      });
       //
  setName('')
  setDescription('')
  setError(null)
  setFile(null)
  handleClose()
    });
  }
);


}
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Location Name:
      <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
    </label>
    <label>
      Description:
      <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
    </label>
    <label>
     Upload Image
      <input type="file" name="uploadimage" onChange={changeHandler}/>
      <div className='output'>
        { error && <div className="error"> {error}</div>}
        {file && <div> {file.name}</div>}
        {/* {file && <ProgressBar file={file} setFile={setFile}/>} */}
        {progress > 0 && <div>{`Upload is ${progress}% done`}</div>}
      </div>
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}



