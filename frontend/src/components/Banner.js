import Button from "./Button";

export default function Banner({ text, buttonText, buttonLink }) {
  return (
    <div className="banner">
      <p className="banner-text">{text}</p>
      <Button
        buttonText={buttonText}
        link={buttonLink}
        className="btn-banner"
      />
    </div>
  );
}
