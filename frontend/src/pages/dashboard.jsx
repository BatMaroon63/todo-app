import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StatsCards from "../components/StatsCard";
import TaskForm from "../components/TaskForm";
import FilterButtons from "../components/FilterButton";
import TaskTable from "../components/TaskTable";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as removeTask,
} from "../services/taskservices";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  // Create Task
  const addTask = async (task) => {
    try {
      await createTask(task);
      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle Complete / Pending
  const toggleTask = async (task) => {
    try {
      await updateTask(task.id, {
        completed: !task.completed,
      });

      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await removeTask(id);
      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "completed") {
      return task.completed;
    }

    if (currentFilter === "pending") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-black text-cyan-400">
              Task Manager
            </h1>

            <p className="text-slate-400 mt-2">
              Organize • Focus • Complete
            </p>

          </div>

          <button
            onClick={logout}
            className="
              bg-red-600
              hover:bg-red-500
              px-5
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
          >
            Logout
          </button>

        </div>

        {/* Stats */}
        <StatsCards tasks={tasks} />

        {/* Task Form */}
        <TaskForm addTask={addTask} />

        {/* Filters */}
        <FilterButtons
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />

        {/* Task Table */}
        <TaskTable
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      </div>

    </div>
  );
}

export default Dashboard;