import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    const handleDouble = () => {
        setValue(value * 2);
    };

    const handleHalve = () => {
        setValue(value / 2);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <p>
                Value: <span>{value}</span>
            </p>
            <Button onClick={handleDouble}>Double</Button>
            <Button onClick={handleHalve}>Halve</Button>
        </div>
    );
}
