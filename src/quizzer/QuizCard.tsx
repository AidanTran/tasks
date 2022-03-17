import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { Row, Col } from "react-bootstrap";

import "./QuizCard.css";

export const QuizCard = ({
    quiz,
    handleClick
}: {
    quiz: Quiz;
    handleClick: (id: number) => void;
}) => {
    return (
        <div className="quiz_card">
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    onClick={() => {
                        handleClick(quiz.id);
                    }}
                >
                    {quiz.title}
                </h3>
                <p>{quiz.questionList.length} questions</p>
            </div>
            <p>{quiz.body}</p>
        </div>
    );
};
