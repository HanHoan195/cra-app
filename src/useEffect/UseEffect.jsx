import React, { useState } from "react";
import ListStudents from "./ListStudents";

const UseEffect = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <button className=" btn btn-outline-dark" onClick={() => setToggle(!toggle)}>List Student</button>
            {toggle && <ListStudents />}
        </>
    )
}

export default UseEffect;