import React, { useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';
import Man1 from '../assets/Man1.png'
import Group1 from '../assets/Group1.png'
import Group2 from '../assets/Group2.png'
import Group3 from '../assets/Group3.png'
import Group4 from '../assets/Group4.png'
import Group5 from '../assets/Group5.png'
import Group6 from '../assets/Group6.png'
import Group7 from '../assets/Group7.png'
import Group8 from '../assets/Group8.png'
import Group9 from '../assets/Group9.png'
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import Vector3 from '../assets/Vector3.png'
import Vector4 from '../assets/Vector4.png'
import Vector5 from '../assets/Vector5.png'
import Vector6 from '../assets/Vector6.png'
import Vector7 from '../assets/Vector7.png'
import Ellipse1 from '../assets/Ellipse1.png'
import Ellipse2 from '../assets/Ellipse2.png'
import Ellipse3 from '../assets/Ellipse3.png'
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:8000/users');
            const data = response.data;
            // console.log(data);
            const foundUser = data.find(
                (user) => user.username === username && user.password === password
            );

            if (foundUser) {
                alert('Login successful!');
                sessionStorage.setItem('username', username);
                navigate('/home')

            } else {
                alert('Invalid credentials!');
            }
        } catch (error) {
            alert('Error fetching authentication data:', error);
        }
    };

    return (
        <div className='grid grid-cols-2 h-[100vh]'>
            <div className='justify-center items-center m-auto '>
                <h1 className='text-blue-700 text-3xl font-bold mb-12'>EIAP</h1>
                <h1 className='text-blue-950 font-bold text-3xl mb-2'>Hi, Welcome Back!</h1>
                <p className='text-gray-600 text-[14px] font-bold mb-10'>Employee Interaction Admin Portal</p>
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className='border rounded-md w-[380px] p-2 border-gray-300 mb-5'>
                            <label className='mr-2 font-bold'>@</label>
                            <input className=' outline-none w-[290px]' placeholder='Email Address' type='email' value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className='border rounded-md w-[380px] p-2 border-gray-300 mb-7'>
                            <label className='mr-2 font-bold'>|**</label>
                            <input className=' outline-none w-[290px] mr-5' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <VisibilityIcon sx={{ fontSize: 20 }} />
                        </div>
                        <div className='flex justify-between w-[380px] mb-7'>
                            <div className='flex gap-2 items-center'>
                                <Toggle className="h-6 w-12" checked={isToggled} onChange={handleToggle} />
                                <p className='text-gray-500 font-bold text-xs'>Remember me</p>
                            </div>
                            <p className='text-blue-600 font-semibold text-xs'><KeyIcon color="disabled" /> Forget Password ?</p>
                        </div>
                        <button className='bg-blue-600 w-[380px] text-white p-1 rounded-md items-center mb-7' type='submit'><LockIcon sx={{ fontSize: 18 }} />  LOGIN</button>
                    </form>
                    <p className='mb-7 flex justify-center  items-center'>Or continue with</p>
                    <button className='border-2 rounded-md w-[380px] p-2 border-gray-300 text-gray-300'>Sign in with google</button>
                </div>
            </div>
            <div className=' p-20  bg-[#3E50E0]'>
                <img className='top-0 h-[120px] right-0 absolute' src={Ellipse3} />
                <img className='top-0 h-[280px] right-0 absolute' src={Ellipse1} />
                <img className='top-0 h-[220px] right-0 absolute' src={Ellipse2} />
                <p className='mb-7 text-slate-100 font-semibold text-3xl'>Welcome to,</p>
                <p className='text-white font-bold text-2xl'>EMPLOYEE INTERACTION
                    ADMIN PORTAL</p>
                <img className='absolute h-14 bottom-[190px] right-[370px]' src={Vector1} />

                <img className='absolute h-[240px] bottom-[100px] right-[210px]' src={Vector2} />
                <img className='absolute h-[185px] bottom-[120px] right-[280px]' src={Vector3} />
                <img className='absolute h-[150px] bottom-[130px] right-[300px]' src={Vector4} />
                <img className='absolute h-[120px] bottom-[150px] right-[320px]' src={Vector5} />
                <img className='absolute h-[100px] bottom-[160px] right-[340px]' src={Vector6} />
                <img className='absolute h-[100px] bottom-[230px] right-[220px]' src={Vector7} />
                <img className='absolute h-[130px] bottom-[130px] right-[430px]' src={Man1} />
                <img className='absolute h-10 bottom-[200px] right-[390px]' src={Group1} />
                <img className='absolute h-16 bottom-[212px] right-[320px]' src={Group2} />
                <img className='absolute h-20 bottom-[225px] right-[275px]' src={Group3} />
                <img className='absolute h-14 bottom-[300px] right-[260px]' src={Group4} />
                <img className='absolute h-14 bottom-[320px] right-[325px]' src={Group5} />
                <img className='absolute h-14 bottom-[240px] right-[200px]' src={Group6} />
                <img className='absolute h-14 bottom-[250px] right-[340px]' src={Group7} />
                <img className='absolute h-14 bottom-[300px] right-[377px]' src={Group8} />
                <img className='absolute h-14 bottom-[230px] right-[260px]' src={Group9} />

            </div>
        </div>

    )
}

export default LoginPage
