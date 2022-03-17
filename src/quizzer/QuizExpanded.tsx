import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";

import "./QuizExpanded.css";
import { QuizQuestion } from "./QuizQuestion";

export const QuizExpanded = ({
    quiz,
    editQuiz,
    deleteQuiz,
    resetView
}: {
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    resetView: () => void;
}) => {
    return (
        <div className="quiz_card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-baseline">
                    <h1 className="title">{quiz.title}</h1>
                    <p>{quiz.questionList.length} questions</p>
                </div>
                <Button
                    className="esc_button text-align-center"
                    onClick={resetView}
                >
                    {"Exit"}
                </Button>
            </div>
            <p className="desc">{quiz.body}</p>
            {quiz.questionList.map((q: Question, index: number) => (
                <QuizQuestion
                    key={quiz.id + "|" + q.id}
                    index={index}
                    question={q}
                ></QuizQuestion>
            ))}
        </div>
    );
};
