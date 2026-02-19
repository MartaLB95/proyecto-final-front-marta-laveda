export default function LogInForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" name="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Villain Name (if different)
        </label>
        <input type="text" className="form-control" name="villainName" />
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
          required
        />
        <div id="emailHelp" className="form-text">
          Your password is safe with us.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" required>
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
