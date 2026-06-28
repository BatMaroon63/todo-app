function TaskTable({
  tasks,
  toggleTask,
  deleteTask,
}) {
  
  if (tasks.length === 0) {
    return (
      <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl p-12 text-center">

        <div className="text-6xl mb-4">
          📝
        </div>

        <h2 className="text-3xl font-bold text-white">
          No Tasks Yet
        </h2>

        <p className="text-slate-400 mt-3">
          Create your first task and start crushing your goals.
        </p>

      </div>
    );
  }

  return (
    <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl overflow-hidden">

      <div className="px-8 py-6 border-b border-slate-700">

        <h2 className="text-3xl font-bold text-white">
          📋 Task List
        </h2>

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left bg-slate-800">

            <th className="px-8 py-4 text-slate-300">
              Title
            </th>

            <th className="px-8 py-4 text-slate-300">
              Priority
            </th>

            <th className="px-8 py-4 text-slate-300">
              Status
            </th>

            <th className="px-8 py-4 text-center text-slate-300">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {tasks.map((task) => (

            <tr
              key={task.id}
              className="
                border-b
                border-slate-800
                hover:bg-slate-800/50
                transition-all
                duration-300
              "
            >

              <td className="px-8 py-5 text-white font-medium">

                {task.title}

              </td>

              <td className="px-8 py-5">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold
                  ${
                    task.priority === "HIGH"
                      ? "bg-red-500/20 text-red-400"
                      : task.priority === "MEDIUM"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {task.priority}
                </span>

              </td>

              <td className="px-8 py-5">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold
                  ${
                    task.completed
                      ? "bg-green-500/20 text-green-400"
                      : "bg-orange-500/20 text-orange-300"
                  }`}
                >
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </span>

              </td>

              <td className="px-8 py-5">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => toggleTask(task)}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-green-600
                      hover:bg-green-500
                      transition-all
                      duration-300
                      hover:scale-105
                      active:scale-95
                    "
                  >
                    {task.completed
                      ? "Undo"
                      : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-red-600
                      hover:bg-red-500
                      transition-all
                      duration-300
                      hover:scale-105
                      active:scale-95
                    "
                  >
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TaskTable;