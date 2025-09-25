import React, { useState } from "react";

function TodoInput({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return; // don’t add empty tasks
        addTodo(text);
        setText(""); // clear input after adding
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button on type="submit">Add</button>
        </form>
    );
}

export default TodoInput;
