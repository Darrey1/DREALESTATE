import React, { useState } from "react";
import Logo from '../assets/therealestate.png';  // Adjust path if needed

const roles = [
  { label: "Agent", value: "agent" },
  { label: "Home Seeker", value: "seeker" },
];

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: "",
    address: "",
    postalCode: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Add further validation and API call here
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Redirect or show success
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="Logo" className="h-14 mb-2" />
          <h2 className="text-2xl font-extrabold text-gray-900">
            Create account
          </h2>
        </div>
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-4 text-red-700 text-sm rounded">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <input
              name="username"
              type="text"
              required
              value={form.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your username"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@email.com"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Role</label>
            <div className="flex gap-4">
              {roles.map((role) => (
                <label key={role.value} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="role"
                    value={role.value}
                    checked={form.role === role.value}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span className="text-gray-700">{role.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. +1234567890"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Home Address
            </label>
            <input
              name="address"
              type="text"
              required
              value={form.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Street, City"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              name="postalCode"
              type="text"
              required
              value={form.postalCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Postal Code"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 mt-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
