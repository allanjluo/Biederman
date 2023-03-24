import React from 'react'
import useStorage from '../firebase/hooks/useStorage.js'

const ProgressBar = ({file, setFile}) => {
  const {url, progress} = useStorage(file)


  return (
    <div className ='progress-bar' style={{width:progress + '%'}}></div>
  )

}

export default ProgressBar
