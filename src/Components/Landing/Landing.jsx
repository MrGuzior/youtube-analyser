import React, { useState } from 'react'
import { useStore } from 'react-redux'

const Landing = () => {
    const [file, setFile] = useState()
    let fileReader;

    const onFileUpload = (file) => {
        fileReader = new FileReader()
        fileReader.onloadend = readFile
        fileReader.readAsText(file)
    }

    const readFile = () => {
        const text = fileReader.result
        console.log(text)
    }



    return (
        <div>
            <input type='file' onChange={(e) => onFileUpload(e.target.files[0])} />
            <button onClick={readFile}>x</button>
        </div>

    )
}

export default Landing