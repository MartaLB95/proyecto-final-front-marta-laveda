import SubjectGroup from "../components/SubjectGroup";

export default function Subjects() {
  const subjects = [
    { name: "Emotional Manipulation", letter: "E" },
    { name: "Evil Plan Speech", letter: "E" },
    { name: "Geopolitcs of Horror", letter: "G" },
    { name: "Psychology of the Hero: Getting to Know your Enemy", letter: "P" },
    { name: "Hacking 101", letter: "H" },
    { name: "Nightmare Creation", letter: "N" },
    { name: "Evil Laughter Workshop", letter: "E" },
    { name: "Style and Mannerisms: Dress to Impress", letter: "S" },
    { name: "Necromancy", letter: "N" },
    { name: "Latin I", letter: "L" },
    { name: "Latin II", letter: "L" },
    { name: "Phonetics of Parsel", letter: "P" },
    { name: "Chemistry applied to Potions", letter: "C" },
    {
      name: "Analysis of the Current Scene: is There a Place for More Villains?",
      letter: "A",
    },
    { name: "History of the Underworld", letter: "H" },
    { name: "Ghosting and Gaslighting", letter: "G" },
    { name: "Levitation", letter: "L" },
    { name: "Selenography", letter: "S" },
    { name: "Fundaments of Sarcasm", letter: "F" },
    { name: "Human Biology", letter: "H" },
    { name: "Tenebrist Baroque Art", letter: "H" },
    { name: "Literature of the Dark Romanticism Movement", letter: "L" },
    { name: "Broomstick Engineering", letter: "B" },
    {
      name: "Prompt Engineering Applied to Mischievous Activities",
      letter: "P",
    },
  ];

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="container my-5">
      <h1>Subjects</h1>
      <div className="subjects-columns">
        {letters
          .filter((letter) =>
            subjects.some((subject) => subject.letter === letter),
          )
          .map((l) => (
            <SubjectGroup key={l} letter={l} subjects={subjects} />
          ))}
      </div>
    </div>
  );
}
