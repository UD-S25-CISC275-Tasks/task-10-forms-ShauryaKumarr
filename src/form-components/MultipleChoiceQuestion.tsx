import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface MultipleChoiceQuestionsProps {
    expectedAnswer: string;
    options: string[];
}

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceQuestionsProps): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                value={selectedOption}
                onChange={(e) => {
                    setSelectedOption(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <div>{selectedOption === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

export default MultipleChoiceQuestion;
