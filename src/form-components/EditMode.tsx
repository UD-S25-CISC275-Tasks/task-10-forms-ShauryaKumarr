import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => {
                    setEditMode(!editMode);
                }}
            />

            {editMode ?
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-checkbox"
                            aria-label="student"
                            label="Is a student"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                    </Form.Group>
                </Form>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
