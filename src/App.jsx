import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex justify-center items-center h-screen">
              <div className="shadow-2xl w-[450px] rounded-lg p-8">
                <h1 className="text-center text-2xl font-bold mb-5">Login</h1>
                <form
                  action="/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzQwODM5NjYwLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&next"
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Address</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="password"
                      id="password"
                    />
                  </div>
                  <button
                    className="text-center bg-blue-600 text-white p-2 rounded-md"
                    type="submit"
                  >
                    Login
                  </button>
                  <Link
                    className="text-blue-600 underline"
                    to="/forgot-password"
                  >
                    Forgot Password
                  </Link>
                  <p className="text-center">
                    Not registered ?{" "}
                    <Link className="text-blue-600 underline" to="/register">
                      Go to register
                    </Link>
                  </p>
                </form>
              </div>
            </main>
          }
        />
        <Route
          path="/register"
          element={
            <main className="flex justify-center items-center h-screen">
              <div className="shadow-2xl w-[450px] rounded-lg p-8">
                <h1 className="text-center text-2xl font-bold mb-5">
                  Register
                </h1>
                <form
                  action="/register/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzQwODM5NjYwLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&next"
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="text"
                      id="first_name"
                      name="first_name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="text"
                      id="last_name"
                      name="last_name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Address</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="password"
                      id="password"
                    />
                  </div>
                  <button
                    className="text-center bg-blue-600 text-white p-2 rounded-md"
                    type="submit"
                  >
                    Register
                  </button>
                  <p className="text-center">
                    Already have account ?{" "}
                    <Link className="text-blue-600 underline" to="/">
                      Go to login
                    </Link>
                  </p>
                </form>
              </div>
            </main>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <main className="flex justify-center items-center h-screen">
              <div className="shadow-2xl w-[450px] rounded-lg p-8">
                <h1 className="text-center text-2xl font-bold mb-5">
                  Forgot Password
                </h1>
                <form
                  action="forgot-password.php"
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Enter your new password</label>
                    <input
                      className="p-2 outline-none border rounded-md"
                      type="password"
                      id="password"
                    />
                  </div>
                  <button
                    className="text-center bg-blue-600 text-white p-2 rounded-md"
                    type="submit"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </main>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <main className="flex-1 p-10 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
                    <p className="text-gray-600">
                      Here’s an overview of your recent activity and quick
                      stats.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <h2 className="text-xl font-semibold mb-2">
                      Quick Actions
                    </h2>
                    <ul className="list-disc ml-5 text-gray-600">
                      <li>Edit Profile</li>
                      <li>Submit New Form</li>
                      <li>Track Progress</li>
                    </ul>
                  </div>
                </div>
              </main>
            </div>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <main className="flex-1 p-10 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
                  <form className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block font-semibold mb-1"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full p-2 border rounded-md outline-none"
                        defaultValue="John"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block font-semibold mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full p-2 border rounded-md outline-none"
                        defaultValue="Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-semibold mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md outline-none"
                        defaultValue="john.doe@example.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              </main>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
