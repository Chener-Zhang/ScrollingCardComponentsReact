import React from 'react';

//CSS
import './Card.css'

function Card(props) {

    const studentInfo = props.studentsInfo;
    const total = studentInfo.grades.reduce((a, b) => a + parseInt(b), 0) / studentInfo.grades.length;
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
                </ul>

            </ul>

        </div>
    </>)
}

export default Card;