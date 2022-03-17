import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";

import "./QuizEdit.css";

export const QuizEdit = ({
    quiz,
    editQuiz,
    deleteQuiz,
    switchEdit,
    resetView
}: {
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    switchEdit: () => void;
    resetView: () => void;
}) => {
    const [newQuiz, setNewQuiz] = useState<Quiz>({ ...quiz });

    const editQuestion = (questionId: number, newQuestion: Question) => {
        setNewQuiz({
            ...newQuiz,
            questionList: newQuiz.questionList.map(
                (q: Question): Question =>
                    q.id === questionId ? newQuestion : q
            )
        });
    };

    const saveChanges = () => {
        editQuiz(quiz.id, { ...newQuiz });
    };

    const swapQuestion = (idx1: number, idx2: number) => {
        setNewQuiz({
            ...newQuiz,
            questionList: quiz.questionList.map(
                (q: Question, idx: number): Question => {
                    if (idx === idx1) return newQuiz.questionList[idx2];
                    if (idx === idx2) return newQuiz.questionList[idx1];
                    return q;
                }
            )
        });
    };

    return (
        <div>
            <div className="edit_header">
                <Form.Group controlId="formEditQuizId">
                    <div className="title_published_flex">
                        <div className="edit_title_area">
                            <Form.Label>Title: </Form.Label>
                            <Form.Control
                                value={newQuiz.title}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setNewQuiz({
                                        ...newQuiz,
                                        title: e.target.value
                                    })
                                }
                            ></Form.Control>
                        </div>
                        <Form.Check
                            className="published_check"
                            type="checkbox"
                            id="is-published_check"
                            label="Published"
                            checked={newQuiz.published}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setNewQuiz({
                                    ...newQuiz,
                                    published: e.target.checked
                                });
                            }}
                        ></Form.Check>
                    </div>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newQuiz.body}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setNewQuiz({ ...newQuiz, body: e.target.value })
                        }
                    ></Form.Control>
                </Form.Group>
            </div>

            <div>
                {newQuiz.questionList.map((q: Question) => (
                    <p key={q.id}>{q.body}</p>
                ))}
            </div>
            <Button
                onClick={() => {
                    swapQuestion(1, 2);
                }}
            >
                Swap 2 and 3!
            </Button>

            <div className="edit_footer">
                <div>
                    <Button
                        variant="success"
                        className="save_edit_btn"
                        onClick={() => {
                            saveChanges();
                            switchEdit();
                        }}
                    >
                        Save
                    </Button>
                    <Button variant="warning" onClick={switchEdit}>
                        Cancel
                    </Button>
                </div>
                <Button
                    variant="danger"
                    onClick={() => {
                        deleteQuiz(quiz.id);
                        resetView();
                    }}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};
