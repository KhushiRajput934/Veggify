import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      setMessage("Signup successful");
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-50 p-6 rounded-lg shadow w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />

        <button
          onClick={handleSignup}
          className="bg-red-400 text-white w-full py-2 rounded"
        >
          Signup
        </button>

        {message && <p className="mt-3 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
