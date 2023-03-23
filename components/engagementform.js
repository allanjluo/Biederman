
import React from 'react'

export default function EngagementForm({handleClose}) {
  const [name, setName] = React.useState('')
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
  console.log(name, imageurl, description)
  setName('')

  setDescription('')
  handleClose()

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
      </div>
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}



