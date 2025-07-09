import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      todos: [
        { id: 1, text: "learn react", completed: false },
        { id: 2, text: "Go shopping", completed: true },
        { id: 3, text: "buy flowers", completed: true },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  handleAdd = () => {
    const { newItem, todos } = this.state;
    if (newItem.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: newItem.trim(),
      completed: false,
    };

    this.setState({
      todos: [...todos, newTodo],
      newItem: "",
    });
  };

  handleDelete = (id) => {
    const updatedTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="w-[400px] bg-white rounded shadow-md p-6">
          <h1 className="text-2xl text-cyan-400 font-bold mb-4">Todo list</h1>
          <ul className="space-y-2 mb-4">
            {this.state.todos.map((item) => (
              <li
                key={item.id}
                className={`flex justify-between items-center px-3 py-2 border rounded ${
                  item.completed ? "text-red-500 line-through" : "text-cyan-700"
                }`}
              >
                <span>{item.text}</span>
                <button
                  onClick={() => this.handleDelete(item.id)}
                  className="text-gray-500 hover:text-red-500 font-bold text-xl"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="flex">
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.handleChange}
              placeholder="add a new todo..."
              className="flex-1 px-3 py-2 border rounded-l outline-none"
            />
            <button
              onClick={this.handleAdd}
              className="bg-gray-700 text-white px-4 rounded-r hover:bg-gray-800"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
