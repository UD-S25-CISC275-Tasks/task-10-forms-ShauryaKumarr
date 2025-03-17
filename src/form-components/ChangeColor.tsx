import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "teal",
        "pink",
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
