import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState(null); // to show who is logged in
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Login successful");
        localStorage.setItem("user", JSON.stringify(data.user)); // persist user in localStorage
        navigate("/"); // redirect to home page after successful login
      } else {
        setStatus(data.message); // to show alert messages from the server
      }
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to server");
    }
  };
  return (
    <div>
      {!user ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            id="submit-login-button"
          >
            Submit
          </button>
          {status && <p>{status}</p>}
        </form>
      ) : (
        <div>
          <p>Welcome, {user} ✅</p>
        </div>
      )}
    </div>
  );
}
