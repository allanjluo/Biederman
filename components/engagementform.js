
import React from 'react'

export default function EngagementForm({handleClose}) {
  const [name, setName] = React.useState('')
  const[imageurl, setImageurl] = React.useState('')
const [description, setDescription] = React.useState('')
const handleSubmit = (e) => {
  e.preventDefault()
  //
  console.log(name, imageurl, description)
  setName('')
  setImageurl('')
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
     Image Url:
      <input type="text" name="imageurl" onChange={(e) => setImageurl(e.target.value)}/>
    </label>
    <label>
      Description:
      <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}



