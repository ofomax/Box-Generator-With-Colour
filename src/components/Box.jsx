import React from 'react'
import { useState } from 'react';




export default function Box(props) {
    const [boxList, setBoxList] = useState([{ colour: "purple" }])
    const [colour, setColour] = useState("")

    const handleDivAdd = (e) => {
        e.preventDefault();
        setBoxList([...boxList, { colour: colour }])
        // setColour()
        
    }

    const handleDivRemove = (index) => {
        const list = [...boxList];
        list.splice(index, 1);
        setBoxList(list);
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
        

    // }
    function handleChange(e){
        
        // setColour([e.target.name]= e.target.value)
        
        // console.log(colour)
    }


  

    return (
        <div>
            <div>
                <form onSubmit={handleDivAdd}>
                    <label htmlFor="colour">Colour: </label>
                    <input type="text" name="colour" value={colour} onChange={(e)=>setColour(e.target.value)}></input>
                    <button type="submit" className="add-btn"  >Add</button>

                </form>


                {boxList.map((b, index) => (
                    <div key={index}>
                        <div className="box" style={{backgroundColor: b.colour }} ></div>
                        {boxList.length > 1 &&
                            <button className="remove-btn" onClick={() => handleDivRemove(index)}>Remove</button>
                        }

                    </div>
                ))}

            </div>
        </div>
    )
}
