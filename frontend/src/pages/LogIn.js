import LogInForm from "../components/LogInForm";

export default function LogIn() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <h1>Log In</h1>
          <LogInForm />
        </div>
      </div>
    </div>
  );
}
