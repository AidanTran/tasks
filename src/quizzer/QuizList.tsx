import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz
}: {
    quizzes: Quiz[];
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
}) => {
    const [displayId, setDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
        console.log(displayId);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };

    return (
        <div className="quiz_list">
            {!displayId &&
                quizzes.map((quiz: Quiz) => (
                    <QuizCard
                        key={quiz.id}
                        quiz={quiz}
                        handleClick={handleQuizView}
                    ></QuizCard>
                ))}
            {quizzes.map((quiz: Quiz) => {
                if (displayId === quiz.id) {
                    return (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        ></QuizCard>
                    );
                }
            })}
        </div>
    );
};
