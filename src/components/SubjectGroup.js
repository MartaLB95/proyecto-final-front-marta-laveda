export default function SubjectGroup({ letter, subjects }) {
  const filtered = subjects
    .filter((s) => s.letter === letter)
    .map((s) => <li key={s.name}>{s.name}</li>);

  return (
    <div className="subject-group">
      <h4>{letter}</h4>
      <ul>{filtered}</ul>
    </div>
  );
}
