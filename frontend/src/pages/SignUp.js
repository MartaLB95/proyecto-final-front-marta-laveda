import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <h1>Sign Up</h1>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
