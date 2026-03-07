import Button from './Button'
export default function SectionCard({
  title,
  text,
  link,
  imageSource,
  imageDescription,
  horizontal = false,
  hideButton=false,
  buttonText,
  className=""
}) {
  return (
      <div  className={`card mb-3 ${horizontal ? "flex-row" : ""} ${className}`}
      style={{ width: horizontal ? "100%" : "18rem" }} id="sectionCard">
       {imageSource && !horizontal && (
            <img
              src={imageSource}
              className="img-fluid rounded-start"
              alt={imageDescription}
            />
  )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
              {!hideButton && <div className="mt-auto"><Button buttonText={buttonText} link={link} /></div>}
              </div>
            </div>
  );
}
