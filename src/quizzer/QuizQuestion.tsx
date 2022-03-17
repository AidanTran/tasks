import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Row, Col, Form, Button } from "react-bootstrap";

import "./QuizQuestion.css";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const QuizQuestion = ({
    index,
    question
}: {
    index: number;
    question: Question;
}) => {
    const [ans, setAns] = useState("");

    const handleClick = (e: ChangeEvent) => {
        setAns(e.target.value);
        console.log(ans);
    };

    return (
        <>
            <hr />
            <div className="question">
                <h4>
                    {index}. {question.body}
                </h4>
                <div className="answer_box">
                    {question.type === "short_answer_question" && (
                        <Form.Group controlId="formShortAnswerBox">
                            <Form.Control
                                value={ans}
                                onChange={handleClick}
                            ></Form.Control>
                        </Form.Group>
                    )}
                    {question.type === "multiple_choice_question" && (
                        <div>
                            {question.options.map(
                                (option: string, i: number) => (
                                    <Form.Check
                                        type="radio"
                                        name={"questionChoice" + index}
                                        key={option + " | " + i}
                                        label={option}
                                        value={option}
                                        checked={ans === option}
                                        onChange={handleClick}
                                    />
                                )
                            )}
                        </div>
                    )}
                    <Button className="submit_btn">Submit</Button>
                </div>
            </div>
        </>
    );
};
