import React, { useEffect, useState } from 'react';
import { HiPlusSm, HiMinus } from 'react-icons/hi';


//CSS
import './Card.css'

function Card(props) {

    const [isActive, setIsActive] = useState(false);
    const studentInfo = props.studentsInfo;
    const total = studentInfo.grades.reduce((a, b) => a + parseInt(b), 0) / studentInfo.grades.length;

    useEffect(() => {

    }, []);


    function toggerHanlder() {
        if (isActive) {
            return <HiMinus onClick={() => {
                setIsActive(false);
            }} />
        } else {
            return <HiPlusSm onClick={() => {
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
                    <li><h4>{total}</h4></li>

                    {toggerHanlder()}

                    {isActive && <ul className='ul3-expand'>
                        {studentInfo.grades.map((grade, i) => {
                            return <li key={studentInfo.firstName.concat(i)}> Test: {i + 1} : {grade}</li>
                        })}
                    </ul>}


                </ul>
            </ul>

        </div>
    </>)
}

export default Card;