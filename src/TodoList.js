import React, { useState } from 'react'
import './App'

export default function TodoList() {
    const [activity, setActivity] = useState("")
    const [listData, setlistData] = useState([])

    function onChange(e) {
        // console.log(e.target.value)
        setActivity(e.target.value)
    }
    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData)
        if (activity === '') {
            alert("Add Activity")
        }
        else {
            setlistData((listData) => {
                const updatedList = [...listData, activity]
                setActivity('')
                console.log(updatedList)
                return updatedList
            })
        }
    }

    function removeActivity(i) {
        const updatedData = listData.filter((ele, id) => i !== id)
        setlistData(updatedData)
    }

    function removeAll() {
        setlistData([])
    }

    return (
        <>
            <div className='container'>
                <div className='header'>
                    Todo List
                </div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={onChange} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'> Here is your List</p>
                {listData !== [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className='listData'>{data}</div>
                                <div className='btn-position'>
                                    <button onClick={() => removeActivity(i)}>Remove</button>
                                </div>
                            </p>

                        </>
                    )
                })}
                {listData.length > 0 &&
                    <button onClick={removeAll}>Remove All</button>}
            </div>
        </>
    )
}
