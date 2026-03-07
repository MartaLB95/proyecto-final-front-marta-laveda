export default function Button({
  text,
  link,
  variant = "dark",
  className = "",
  buttonText = "",
}) {
  return (
    <a href={link} className={`btn btn-${variant} ${className}`}>
      {buttonText}
    </a>
  );
}
