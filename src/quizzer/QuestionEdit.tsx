import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
    return (
        <>
            <hr />
            <div className="edit_question">
                <div className="edit_title_row">
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
