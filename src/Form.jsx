import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {db} from "./firebase-config";
import {collection , getDocs , addDoc} from "firebase/firestore"


function Form() {
    const [newName, setName] = useState('');
    const [newEmail, setEmail] = useState('');
    const [users,setUsers] = useState([]);
    const userCollection= collection(db,"users");
    const [flag, setFlag]  = useState(false);
    useEffect(()=>{
        const getUsers = async ()=>{
            const data = await getDocs(userCollection);
            console.log(data);
            setUsers(data.docs.map((doc => ({...doc.data(),id:doc.id}))));
        }

        getUsers()
    },[flag]);

    const createUser = async() => {
        await addDoc(userCollection,{name: newName ,email: newEmail});
        setFlag(!flag);
    };


  return (
    <div className='container ' >
          <form className='flex flex-col justify-center items-center pt-20 space-y-3 '>
            <div className='flex flex-col space-y-3 items-center justify-start' >
              <label>
        Name:
        <input className='border-2 border-slate-500' type="text" value={newName} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input className='border-2 border-slate-500' type="email" value={newEmail} onChange={(e) => setEmail(e.target.value)} />
      </label>
    </div>
    <div>

    </div>
      <button className=' bg-blue-400 text-white px-3 py-2 rounded-md  font-medium hover:bg-blue-700' onClick={createUser} >Submit</button>
      <div className="users">
        {users.map((user)=>{
            return (
            <div>
                <h1>Name: {user.name}</h1>
                <h1>Email: {user.email}</h1>
            </div>)
        })
        }
      </div>
      <Link to="/">
      <button className=' bg-violet-400 text-white px-3 py-2 rounded-md  font-bold mt-2 hover:bg-violet-700'>Switch to Home</button></Link>
    </form>
    </div>

  );
}

export default Form;
