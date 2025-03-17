import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUse = () => {
        setAttemptsLeft((prev) => Math.max(0, prev - 1));
    };

    const handleGain = () => {
        const attempts = parseInt(requestedAttempts);
        if (!isNaN(attempts)) {
            setAttemptsLeft((prev) => prev + attempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={handleUse}
                disabled={attemptsLeft <= 0}
                className="me-2 mt-2"
            >
                use
            </Button>
            <Button onClick={handleGain} className="mt-2">
                gain
            </Button>
        </div>
    );
}

export default GiveAttempts;
