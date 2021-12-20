// https://codesandbox.io/s/react-new
// https://jsonplaceholder.typicode.com/photos
// https://sk7uy.csb.app/

import axios from "axios";
import { useEffect, useState } from "react";


function Color() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                setData(res.data.slice(0, 20));
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    function onClickHanlder(itemId) {

        const newData = data.filter((item) => {
            return item.id !== itemId;
        })

        setData(newData);
    }


    function items(datas) {
        return datas.map((item, i) => {
            return <li key={item.id}>
                <img src={item.url} />
                <h3 onClick={() => {
                    onClickHanlder(item.id);
                }}>{item.title}</h3>
            </li>
        })
    }
    return (<>
        <input onChange={(e) => {
            setSearch(e.target.value);
        }} />
        <ul style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }}>

            {search === '' ? items(data) : items(data.filter((value) => {
                return value.title.includes(search);
            }))}
        </ul>

    </>)
}

export default Color;