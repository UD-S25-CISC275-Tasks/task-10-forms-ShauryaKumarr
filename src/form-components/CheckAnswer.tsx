import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface CheckAnswerProps {
    expectedAnswer: string;
}

export function CheckAnswer({
    expectedAnswer,
}: CheckAnswerProps): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={givenAnswer}
                    onChange={(e) => {
                        setGivenAnswer(e.target.value);
                    }}
                />
            </Form.Group>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

export default CheckAnswer;
