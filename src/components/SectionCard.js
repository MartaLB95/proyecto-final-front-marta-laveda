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
              <a href={link} className="btn btn-primary">
                Continue reading...
              </a>
              </div>
            </div>
  );
}
