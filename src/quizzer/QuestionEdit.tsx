import React from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";

import "./QuestionEdit.css";

export const QuestionEdit = ({
    index,
    question,
    editQuestion,
    removeQuestion,
    swapQuestion
}: {
    index: number;
    question: Question;
    editQuestion: (questionId: number, newQuestion: Question) => void;
    removeQuestion: (questionId: number) => void;
    swapQuestion: (idx1: number, idx2: number) => void;
}) => {
    const handlePoints = (e: React.ChangeEvent<HTMLInputElement>) => {
        editQuestion(question.id, {
            ...question,
            points: parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value)
        });
    };

    return (
        <>
            <hr />
            <Button
                onClick={() => {
                    swapQuestion(1, 2);
                }}
            >
                Swap 1 and 2
            </Button>
            <div className="edit_question">
                <div className="edit_title_row">
                    <div className="edit_title_box">
                        <h4>{index + 1}. </h4>
                        <Form.Group
                            className="title_input"
                            controlId="editTitleFormId"
                        >
                            <Form.Control
                                value={question.body}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    editQuestion(question.id, {
                                        ...question,
                                        body: e.target.value
                                    });
                                }}
                            ></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="edit_title_box">
                        <Form.Group
                            className="points_input"
                            controlId="editPointsFormId"
                        >
                            <Form.Control
                                value={question.points}
                                type="number"
                                onChange={handlePoints}
                            ></Form.Control>
                        </Form.Group>
                        <h4>pt{question.points !== 1 ? "s" : ""}</h4>
                    </div>
                </div>
                <div className="edit_answer_box">
                    {question.type === "short_answer_question" && (
                        <Form.Group controlId="formEditShortExpectedBox">
                            <Form.Label>Answer:</Form.Label>
                            <Form.Control
                                value={question.expected}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    editQuestion(question.id, {
                                        ...question,
                                        expected: e.target.value
                                    });
                                }}
                            ></Form.Control>
                        </Form.Group>
                    )}
                    {/* {/* {question.type === "multiple_choice_question" && (
                        <div>
                            {question.options.map((option: string, i: number) => (
                                <Form.Check
                                    type="radio"
                                    name={"questionChoice" + index}
                                    key={option + " | " + i}
                                    label={option}
                                    value={option}
                                    checked={question.submission === option}
                                    onChange={handleClick}
                                />
                            ))}
                        </div>
                            )} */}
                </div>
                <div className="edit_question_footer">
                    <Form.Check
                        className="published_question_check"
                        type="checkbox"
                        id="is-question_published_check"
                        label="Published"
                        checked={question.published}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            editQuestion(question.id, {
                                ...question,
                                published: e.target.checked
                            });
                        }}
                    ></Form.Check>
                    <Button
                        variant="danger"
                        onClick={() => {
                            removeQuestion(question.id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </>
    );
};
