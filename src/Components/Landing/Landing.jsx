import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectHistory, setWatchHistory } from '../App/appSlice'

const Landing = () => {
    const dispatch = useDispatch()
    const history = useSelector(selectHistory)
    let fileReader;

    const onFileUpload = (file) => {
        fileReader = new FileReader()
        fileReader.onloadend = readFile
        fileReader.readAsText(file)
    }

    const readFile = () => {
        const text = fileReader.result
        dispatch(setWatchHistory(text))
        console.log(history)
    }





    return (
        <div>
            <input type='file' onChange={(e) => onFileUpload(e.target.files[0])} />
            <button onClick={() => console.log(history)}>x</button>
        </div>

    )
}

export default Landing