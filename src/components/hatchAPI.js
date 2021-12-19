import axios from "axios";
import react, { useEffect, useState } from "react";
import Card from "./Card";

//CSS
import './HatchAPI.css'

function HatchAPI() {

    const [result, setResult] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
            .then((response) => {
                setResult(response.data.students)
                setFilteredData(response.data.students)
            })

    }, [])


    const onChangleHandler = (e) => {
        let userTarget = e.target.value.toLowerCase();

        const newResult = filteredData.filter((student) => {
            const fullName = student.firstName.concat(student.lastName).toLowerCase();
            return fullName.includes(userTarget);
        });

        setResult(newResult);
    }


    function showResult() {

        return (
            <>
                <input className="searchBar" placeholder="Search by name" onChange={(e) => {
                    onChangleHandler(e)
                }} />
                <ul>
                    {result.map(e => {
                        return <li key={e.id}>
                            <Card studentsInfo={e} />
                        </li>
                    })}
                </ul>
            </>

        )
    }


    return (<>
        {result ? showResult() : null}
    </>
    )
}
export default HatchAPI;

// 24:
// city: "Krajandadapmulyo"
// company: "Wikibox"
// email: "ggallymoreo@mashable.com"
// firstName: "Geraldine"
// grades: (8) ['97', '71', '89', '85', '85', '87', '92', '75']
// id: "25"
// lastName: "Gallymore"
// pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg"
// skill: "WTL"