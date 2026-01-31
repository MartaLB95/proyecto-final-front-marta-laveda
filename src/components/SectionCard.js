import Button from './Button'
export default function SectionCard({
  title,
  text,
  link,
  imageSource,
  imageDescription,
  horizontal = false 
}) {
  return (
      <div  className={`card mb-3 ${horizontal ? "flex-row" : ""}`}
      style={{ width: horizontal ? "100%" : "18rem" }}>
       {imageSource && !horizontal && (
            <img
              src={imageSource}
              className="img-fluid rounded-start"
              alt={imageDescription}
            />
  )}
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
              <Button text="Continue reading" link={link} />
              </div>
            </div>
  );
}
