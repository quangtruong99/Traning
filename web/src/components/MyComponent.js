import React, { useState } from 'react'

export default function MyComponent() {
    const inforname = {
        name: 'truong',
        age: 24
    }
    const [infor, setInfor] = useState(inforname)
    const clickMe = () => {
      setInfor({
        name: 'truong123',
        age:Math.floor((Math.random()*100) + 1)
      })
    }
    const onchange = (event) => {
        console.log(event.target.value);
        setInfor({
            ...inforname,
            name: event.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(infor);
    }
    return (
        <>
            <h3>hello , myname is {infor.name} and is {infor.age}</h3>
            {/* <button onClick={() => {
                clickMe()
            }}>click</button> */}
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <input type='text' onChange={(event)=>{onchange(event)}} />
                <button>submit</button>
            </form>
        </>
    )
}