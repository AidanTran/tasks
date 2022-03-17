import React from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz
}: {
    quizzes: Quiz[];
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
}) => {
    return (
        <>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id}>{quiz.id + " " + quiz.title}</div>
            ))}
        </>
    );
};
