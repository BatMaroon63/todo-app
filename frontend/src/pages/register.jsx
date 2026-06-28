import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../services/authservices";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      toast.success("Account created successfully!");

      navigate("/");
    } catch (error) {
      toast.error(
    error.response?.data?.message ||
    "Registration Failed"
);
    }
  };

  return (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

    <div className="w-full max-w-md">

      <div className="text-center mb-10">

        <h1 className="text-5xl font-black tracking-wider text-cyan-400">
          TASK MANAGER
        </h1>

        <p className="text-slate-400 mt-4">
          Three Worlds. One Mission.
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Create Account
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              px-4
              py-3
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

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              px-4
              py-3
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

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              px-4
              py-3
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

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              text-slate-950
              font-bold
              py-3
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
          >
            Begin Your Journey
          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            to="/"
            className="
              text-cyan-400
              hover:text-cyan-300
              transition-colors
            "
          >
            Already have an account? Login →
          </Link>

        </div>

      </div>

    </div>

  </div>
);
}

export default Register;