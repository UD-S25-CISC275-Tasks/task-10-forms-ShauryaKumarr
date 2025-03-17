import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): React.JSX.Element {
    const [margin, setMargin] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <Button
                onClick={() => {
                    setMargin(margin + 4);
                }}
            >
                Shove Box
            </Button>
            <div
                data-testid="moveable-box"
                style={{
                    display: "inline-block",
                    backgroundColor: "red",
                    width: "50px",
                    height: "50px",
                    marginLeft: `${margin}px`,
                }}
            ></div>
        </div>
    );
}
