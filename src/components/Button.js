export default function Button({text, link, variant = "dark"}) {
  return (
    <a href={link} className={`btn btn-${variant}`}>
      {text}
    </a>
  )
}