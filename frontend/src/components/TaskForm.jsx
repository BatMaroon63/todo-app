import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("LOW");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      title,
      priority,
    });

    setTitle("");
    setPriority("LOW");
  };

  return (
    <div
      className="
      mb-8
      rounded-3xl
      border
      border-slate-700
      bg-slate-900/80
      backdrop-blur-md
      shadow-2xl
      p-8
    "
    >
      <h2 className="text-3xl font-bold text-white mb-8">
        ✨ Create New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 gap-5"
      >
        <input
          type="text"
          placeholder="📝 Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            px-5
            py-4
            text-white
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500
          "
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className="
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            px-5
            py-4
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500
          "
        >
          <option value="LOW">🟢 Low</option>
          <option value="MEDIUM">🟡 Medium</option>
          <option value="HIGH">🔴 High</option>
        </select>

        <button
          type="submit"
          className="
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
            hover:shadow-cyan-500/30
            active:scale-95
          "
        >
          ➕ Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;