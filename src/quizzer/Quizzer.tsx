import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";

import sample from "../data/quizzes.json";

const QUIZZES = sample.map(
    (quiz): Quiz => ({
        ...quiz,
        questionList: quiz.questionList.map(
            (q): Question => ({
                ...q,
                submission: "",
                type: q.type as QuestionType
            })
        )
    })
);

/* {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id}>
                    {quiz.id + " " + quiz.questionList[0].body}
                </div>
            ))} */

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    return (
        <>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id}>
                    {quiz.id + " " + quiz.questionList[0].body}
                </div>
            ))}
        </>
    );
}
