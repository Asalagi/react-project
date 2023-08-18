import { useState } from 'react';
import "./horse-shop.css";

function Genetics() {
    const A = "A"
    const a = "a";
    const E = "E";
    const e = "e";

    const [selectValue, setSelectValue] = useState("");

    const handleChange = (event) => {
        setSelectValue(event.target.value);
    };

    const isHorseBlack = [a + a + E + e, A + a + E + e, A + a + e + e];

    return (
        <div>
            <header className="header"><h1>Welcome!</h1></header>
                <div className="container">
                    <select name="baseColor" onChange={handleChange} value={selectValue}>
                        <option value="">Choose a color</option>
                        <option value={a+a+E+e}>Black</option>
                        <option value={A+a+E+e}>Bay</option>
                        <option value={A+a+e+e}>Chestnut/Sorrel</option>
                        </select> <br />
                        <h2>{selectValue}</h2>
                    {isHorseBlack.includes(selectValue) ? (selectValue === "aaEe" ? <h2>Your horse is black.</h2> : <h2>Your horse is not black.</h2>) : null}
                    </div>
                </div>
    );
};

export default Genetics;