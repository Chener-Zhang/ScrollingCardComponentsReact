
function Card(props) {

    const studentInfo = props.studentsInfo;
    const total = studentInfo.grades.reduce((a, b) => a + parseInt(b), 0) / studentInfo.grades.length;
    return (<>
        <div>
            <img src={studentInfo.pic} />
            <div>
                <h2>{studentInfo.firstName}</h2>
                <h4>{studentInfo.email}</h4>
                <h4>{studentInfo.company}</h4>
                <h4>{studentInfo.skill}</h4>
                <h4>{total}</h4>
            </div>

        </div>
    </>)
}

export default Card;