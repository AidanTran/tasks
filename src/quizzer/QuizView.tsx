import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizExpanded } from "./QuizExpanded";

import "./QuizView.css";

export const QuizView = ({
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
            <QuizExpanded
                quiz={quiz}
                editQuiz={editQuiz}
                resetView={resetView}
            ></QuizExpanded>
        </div>
    );
};
