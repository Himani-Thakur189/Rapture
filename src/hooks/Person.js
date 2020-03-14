import React from 'react';
import {useState} from 'react';
const Person = (props) => {
    const [fullname,setfullname]=useState({name:'himani'})
    const [title]=useState('Hooks introduction')

    // useEffect(()=>{
    //     console.log('UseEffect here')
    //     return ()=>{
    //         console.log('useEffect unmounted')
    //     };
    // },[props.data]);   //[] works like componentDiDMount render only once ,when the component is invoked fopr first time, and the
              //function in return will invoked when the component is unmounted 
    const update=()=>{
        setfullname({name:'alisha'})
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>Name is :{fullname.name}</p>
            <p>Data by props:{props.data}</p>
            <button onClick={update}>Click to change state</button>
        
        </div>
    );
};

export default Person;