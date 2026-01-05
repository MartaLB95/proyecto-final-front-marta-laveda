export default function Button({text, link, variant = "light"}) {
  return (
    <a href={link} className={`btn btn-${variant}`}>
      {text}
    </a>
  )
}