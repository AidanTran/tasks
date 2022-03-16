import React, { useState } from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { Button } from "react-bootstrap";
import { ShowHideTasks } from "./ShowHideTasks";

function App(): JSX.Element {
    const [quizzer, setQuizzer] = useState<boolean>(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <Button
                    onClick={() => {
                        setQuizzer(!quizzer);
                    }}
                >
                    {quizzer ? "Quizzer" : "Tasks"}
                </Button>
            </header>
            {quizzer && <Quizzer></Quizzer>}
            <ShowHideTasks visible={!quizzer}></ShowHideTasks>
        </div>
    );
}

export default App;
