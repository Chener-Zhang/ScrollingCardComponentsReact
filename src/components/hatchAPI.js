import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

//CSS
import './HatchAPI.css'

function HatchAPI() {

    //Initialize useState

    const [result, setResult] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const axios = require('axios');

    //API Call
    useEffect(() => {
        if (result == null) {
            axios.get('https://api.hatchways.io/assessment/students')
                .then((response) => {
                    setResult(response.data.students)
                    setFilteredData(response.data.students)
                }).catch((error) => {
                    console.log(error);
                })
        }

    }, [])


    //Search Name and filter names
    const onNameSearchHandler = (e) => {
        let userTarget = e.target.value.toLowerCase();
        const newResult = filteredData.filter((student) => {
            const fullName = student.firstName.concat(student.lastName).toLowerCase();
            return fullName.includes(userTarget);
        });
        setResult(newResult);
    }

    //Search Tags and filter tags 
    const onTagSearchHandler = (e) => {
        if (e.target.value === '') {
            setResult(filteredData)
        } else {
            let userTarget = e.target.value.toLowerCase();
            const newResult = filteredData.filter((student) => {
                const userTags = localStorage.getItem(student.id);
                return userTags.includes(userTarget);
            });
            setResult(newResult);
        }
    }

    //Return the JSX result
    function showResult() {
        return (
            <>
                <input className="searchBar" placeholder="Search by name" onChange={(e) => { onNameSearchHandler(e) }} />
                <input className="searchBar" placeholder="Search by tag" onChange={(e) => { onTagSearchHandler(e) }} />
                <ul>{result.map(e => { return <li key={e.id}><Card studentsInfo={e} /></li> })}</ul>
            </>
        )
    }

    //If result is not null, then shows the result, else do nothing
    return (<>{result ? showResult() : null}</>)
}
export default HatchAPI;

