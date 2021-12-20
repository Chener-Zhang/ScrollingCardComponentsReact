import { useEffect, useState } from "react";

function Todo() {

    const [input, setInput] = useState('');
    const [list, setList] = useState([]);


    useEffect(() => {

    }, [input, list]);

    function onChangeHandler(e) {
        setInput(e.target.value);
    }

    function onClickHandler() {
        setList([...list, input])
        setInput('')
    }

    function onDeleteHandler(e) {
        console.log(e.target.name)
        const filterdList = list.filter((item) => {
            return item !== e.target.name;
        })

        setList(filterdList);

    }

    return <>
        <div>
            <input value={input} onChange={(e) => {
                onChangeHandler(e);
            }}></input>

            <button onClick={() => {
                onClickHandler();
            }}>Add</button>
        </div>


        {list.length > 0 && <ul>
            {list.map((item, i) => {
                return <li key={item.concat(i)}>{item}  <button name={item} onClick={(e) => {
                    onDeleteHandler(e);
                }}>delete</button></li>
            })}
        </ul>}


    </>
}


export default Todo;