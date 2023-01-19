import React, { useState, useEffect } from 'react';
import './style.css';


import { BiSearch } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';


function Profile(props) {
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [gender,setGender]=useState("");
    const [location,setLocation]=useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/displaydata');
                const data = await res.json();
                console.log("coming data", data);
                setUserData(data.data);
            }
            catch (error) {
                console.log("API Error is", error);
            }

        }
        fetchData();
    }, []);
    console.log("data is", userData);
    const displayuser = (id) => {


        const filteredCars = userData.filter(
            (item) => item.userid === id
        );
        setSelectedUser(filteredCars);
    };
    console.log(selectedUser);

    return (
        <div>
            <header className='header-wrapper'>
                <h3>SECQUR<span className='red'>AI</span>SE</h3>

                <div className='icon-btn'>
                    <BiSearch className='searchicon' />
                    <div>
                        <button className='btn-green'>25</button>
                        <button className='btn-red' >25</button>
                    </div>
                </div>

            </header>
            <div className='main-wrapper'>
                <div className='first'><FaBars className='bar-icon' /></div>


                <div className='second'>

                    {selectedUser.map((data) => {
                        return (
                            <>

                                <h3 className='gender'>{data.gender}</h3>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='userid'>
                                            <h3>{data.userid}</h3>
                                            <h3>Person Detected</h3>
                                        </div>
                                        <div className='maindata'>
                                            <p>Name : {data.name}</p>
                                            <p>Location : {data.location}</p>
                                            <p>Date : {data.userdate}</p>
                                            <p>Time: {data.usertime}</p>
                                        </div>
                                        <div className='desc'>
                                            <p>Description:</p>
                                            <p>{data.name} detected at {data.location} on {data.usertime}</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <img key={data.userid} className='userimage' src={data.image} alt="not found" />
                                    </div>
                                </div>
                            </>
                        );
                    })}

                </div>



                <div className='third'>
                    <h3 className='event'>Events</h3>
                    <div className='filter'>
                       <label> Filter</label>
                        <select onChange={(e)=>setGender(e.target.value)} placeholder="Gender">
                            <option value="">  </option>
                            <option value="Male"> Male </option>
                            <option value="Female"> Female </option>
                        </select>
                         <select onChange={(e)=>setLocation(e.target.value)} placeholder="Location">
                            <option value="">  </option>
                            <option value="Chennai"> Chennai </option>
                            <option value="Hyderabad"> Hyderabad </option>
                            <option value="Bangalore"> Bangalore </option>

                        </select>
                        <input type="date"/>
                        </div>
                        

                      
                    {userData.map((user, index) => {
                        return (
                            <div tabindex={index} key={user._id} className='grey' onClick={() => displayuser(user.userid)}>
                                <div className='userdata-wrap'>
                                    <p>{user.userid}:{user.location}</p>
                                    <p>{user.userdate} {user.usertime}</p>
                                </div>
                                <p className='person'>Person detected</p>
                            </div>
                        );
                    })}


                </div>

            </div>
        </div >


    );
}

export default Profile;