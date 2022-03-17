import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Row, Col, Form, Button } from "react-bootstrap";

import "./QuizQuestion.css";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const QuizQuestion = ({
    index,
    question,
    submitted,
    handleSubmit,
    addPoints,
    editQuestionSub
}: {
    index: number;
    question: Question;
    submitted: boolean;
    handleSubmit: (index: number) => void;
    addPoints: (p: number) => void;
    editQuestionSub: (questionId: number, newAns: string) => void;
}) => {
    const handleClick = (e: ChangeEvent) => {
        editQuestionSub(question.id, e.target.value);
    };

    const handleSubmitClick = () => {
        handleSubmit(index);
        if (question.submission === question.expected) {
            addPoints(question.points);
        }
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
                                value={question.submission}
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
                                        checked={question.submission === option}
                                        onChange={handleClick}
                                    />
                                )
                            )}
                        </div>
                    )}
                    <Button
                        disabled={submitted}
                        className="submit_btn"
                        onClick={handleSubmitClick}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
};
