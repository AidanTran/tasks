import React from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";

import sample from "../data/quizzes.json";

const QUIZZES = sample.map(
    (quiz): Quiz => ({
        ...quiz,
        questionList: quiz.questionList.map((q): Question => ({...q, submission: "", type: (QuestionType)q.type})),
    })
);

export function Quizzer(): JSX.Element {
    return <h3>Quizzer</h3>;
}
