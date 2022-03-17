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
    const [points, setPoints] = useState<number>(0);
    const [submitArr, setSubmitArr] = useState<boolean[]>(
        quiz.questionList.map((q: Question): boolean => false)
    );

    const handleQuestionSubmit = (index: number) => {
        const newSubmitArr = [...submitArr];
        newSubmitArr.splice(index, 1, true);
        setSubmitArr(newSubmitArr);
    };

    const totalPoints = quiz.questionList.reduce(
        (prev: number, q: Question): number => prev + q.points,
        0
    );

    const addPoints = (p: number) => {
        setPoints((prevCount) => prevCount + p);
    };

    const reset = () => {
        setSubmitArr(submitArr.map((sub: boolean): boolean => false));
        editQuiz(quiz.id, {
            ...quiz,
            questionList: quiz.questionList.map(
                (q: Question): Question => ({ ...q, submission: "" })
            )
        });
        setPoints(0);
    };

    const editQuestion = (questionId: number, newQuestion: Question) => {
        editQuiz(quiz.id, {
            ...quiz,
            questionList: quiz.questionList.map(
                (q: Question): Question =>
                    q.id === questionId ? newQuestion : q
            )
        });
    };

    const editQuestionSub = (questionId: number, sub: string) => {
        editQuiz(quiz.id, {
            ...quiz,
            questionList: quiz.questionList.map(
                (q: Question): Question =>
                    q.id === questionId ? { ...q, submission: sub } : q
            )
        });
    };

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
                    submitted={submitArr[index]}
                    handleSubmit={handleQuestionSubmit}
                    addPoints={addPoints}
                    editQuestionSub={editQuestionSub}
                ></QuizQuestion>
            ))}
            <div className="footer">
                <Button onClick={reset}>Reset</Button>
                <span className="score_report">
                    {points}/{totalPoints}
                </span>
            </div>
        </div>
    );
};
