import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { selectHistory, setWatchHistory } from '../App/appSlice'

const Landing = () => {
    const [redirect, setRedirect] = useState(false)
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

    const handleRedirect = () => history ? setRedirect(true) : setRedirect(false)





    return (
        <div>
            <input type='file' onChange={(e) => onFileUpload(e.target.files[0])} />
            <button onClick={() => handleRedirect()}>x</button>

            {redirect ? <div><p>Calculating...</p> <Redirect to={'/stats'} /></div> : null}
        </div>

    )
}

export default Landing