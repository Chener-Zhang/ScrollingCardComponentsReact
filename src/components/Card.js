import React, { useEffect, useState } from 'react';
import { HiPlusSm, HiMinus } from 'react-icons/hi';


//CSS
import './Card.css'

function Card(props) {

    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState([]);

    const studentInfo = props.studentsInfo;
    const averageScore = studentInfo.grades.reduce((a, b) => a + parseInt(b), 0) / studentInfo.grades.length;

    function toggerHanlder() {
        if (isActive) {
            return <HiMinus className='myToggle' onClick={() => {
                setIsActive(false);
            }} />
        } else {
            return <HiPlusSm className='myToggle' onClick={() => {
                setIsActive(true);
            }} />
        }
    }

    return (<>
        <div className='card'>
            <ul className='ul1'>
                <li><img src={studentInfo.pic} alt={studentInfo.firstName} /></li>

                <ul className='ul2'>
                    <li><h2>{studentInfo.firstName.concat(" ", studentInfo.lastName)}</h2>
                    </li>
                    <li><h4>{studentInfo.email}</h4></li>
                    <li><h4>{studentInfo.company}</h4></li>
                    <li><h4>{studentInfo.skill}</h4></li>
                    <li><h4>{averageScore}</h4></li>

                    <button>new tag</button>
                    <input className='tagInput' onChange={(e) => {
                        setTag(e.target.value)
                    }} />

                    {isActive && <ul className='ul3-expand'>
                        {studentInfo.grades.map((grade, i) => {
                            return <li key={studentInfo.firstName.concat(i)}> Test: {i + 1} : {grade}</li>
                        })}
                    </ul>}
                </ul>
                {toggerHanlder()}
            </ul>

        </div>
    </>)
}

export default Card;