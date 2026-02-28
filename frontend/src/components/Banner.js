import Button from './Button';

export default function Banner({text, buttonText, buttonLink}) {
  return (
    <div className="banner">
      <p>{text}</p>
      <Button text={buttonText} link={buttonLink} />
    </div>
  );
}