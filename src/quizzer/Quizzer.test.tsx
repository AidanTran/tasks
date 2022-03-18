import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        const button = screen.getByText("Add New Quiz");
        expect(screen.queryByLabelText("Title: ")).not.toBeInTheDocument();
        button.click();
        expect(screen.queryByLabelText("Title:")).toBeInTheDocument();
    });
});
