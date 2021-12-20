import React, { useEffect, useState } from 'react';
import { HiPlusSm, HiMinus } from 'react-icons/hi';


//CSS
import './Card.css'

function Card(props) {

    //Init useState 
    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState('');
    const [tagArray, setTagArray] = useState([])
    const [firstRender, setFirstRender] = useState(true);

    //Get the props from parents component
    const studentInfo = props.studentsInfo;

    //Calculate the average score by using reduece function
    const averageScore = studentInfo.grades.reduce((a, b) => a + parseInt(b), 0) / studentInfo.grades.length;


    useEffect(() => {
        //Avoid duplication of API call
        if (firstRender) {
            const retrievedData = localStorage.getItem(studentInfo.id);
            if (retrievedData !== null) {
                const retrievedDataArray = JSON.parse(retrievedData);
                setTagArray(retrievedDataArray);
            }
            setFirstRender(false)
        }

        //Retieve the tags data from Local Storage
        localStorage.setItem(studentInfo.id, JSON.stringify(tagArray))

    }, [tagArray])



    function toggerHanlder() {
        if (isActive) {
            return <HiMinus className='myToggle' onClick={() => { setIsActive(false); }} />
        } else {
            return <HiPlusSm className='myToggle' onClick={() => { setIsActive(true); }} />
        }
    }

    return (<>
        <div className='card'>
            <ul className='ul1'>
                <li><img src={studentInfo.pic} alt={studentInfo.firstName} /></li>

                <ul className='ul2'>
                    <li><h2>{studentInfo.firstName.concat(" ", studentInfo.lastName)}</h2></li>
                    <li><h4>{studentInfo.email}</h4></li>
                    <li><h4>{studentInfo.company}</h4></li>
                    <li><h4>{studentInfo.skill}</h4></li>
                    <li><h4>{averageScore}</h4></li>

                    {/* New Tage Button */}
                    <button onClick={() => {
                        if (tag !== '') {
                            if (!tagArray.includes(tag)) {
                                setTagArray([...tagArray, tag])
                                setTag('')
                            }
                        }
                    }}>new tag</button>

                    {/* Render the tags if it is not an empty array */}
                    {tagArray.length > 0 && tagArray.map((item, i) => {
                        return <li className='tag' key={item.concat(i)}>{item}</li>
                    })}

                    {/* User create tag */}
                    <input className='tagInput' onChange={(e) => {
                        setTag(e.target.value)
                    }} value={tag} />

                    {/* Check if the toggle is + / -.  */}
                    {isActive &&
                        <ul className='ul3-expand'>{studentInfo.grades.map((grade, i) => { return <li key={studentInfo.firstName.concat(i)}> Test: {i + 1} : {grade}</li> })}</ul>}

                </ul>
                
                {toggerHanlder()}
            </ul>

        </div>
    </>)
}

export default Card;