import React from "react";

// Move useState inside a component or hook function
export function DoubleHalfState(): React.JSX.Element {
    const [value, setValue] = React.useState(10);

    return (
        <div>
            <p>{value}</p>
            <button
                onClick={() => {
                    setValue(value * 2);
                }}
            >
                Double
            </button>
            <button
                onClick={() => {
                    setValue(value / 2);
                }}
            >
                Half
            </button>
        </div>
    );
}
