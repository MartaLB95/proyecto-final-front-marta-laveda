export default function SectionCard({
  title,
  text,
  link,
  imageSource,
  imageDescription,
}) {
  return (
      <div className="card">
            <img
              src={imageSource}
              className="img-fluid rounded-start"
              alt={imageDescription}
            />
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
