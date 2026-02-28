import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [villainName, setVillainName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setStatus("Passwords do not match");
      return; // stops the function if passwords don't match
    }
    try {
      const res = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, villainName }),
      });
      const data = await res.json();
      setStatus(data.message); // to show alert messages from the server
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to server");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Villain Name (if different)
        </label>
        <input
          type="text"
          className="form-control"
          value={villainName}
          onChange={(e) => setVillainName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
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
        <label htmlFor="exampleInputPassword1" className="form-label">
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
        <div id="passwordHelp" className="form-text">
          Your password is safe with us.
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Repeat Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-dark" id="submit-signup-button">
        Submit
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
