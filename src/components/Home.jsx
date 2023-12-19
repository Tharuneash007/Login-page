import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    let username = sessionStorage.getItem('username');

    useEffect(() => {
        if (username === '' || username === null) {
            navigate('/')
        }
    }, [])

    const profile = username ? username.slice(0, username.indexOf('@')) : ''
    // console.log(profile);

    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <h1 className='text-6xl font-bold'>{profile ? `*** Welcome back ${profile}***` : ''}</h1>
        </div>
    )
}

export default Home