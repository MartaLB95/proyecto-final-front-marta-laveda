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
        { name: "Analysis of the Current Scene: is There a Place for More Villains?", letter: "A" },
        { name: "History of the Underworld", letter: "H" },
        { name: "Ghosting and Gaslighting", letter: "G" },




        ]


        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return (
    <div>
    {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(l => ( <SubjectGroup key={l} letter={l} subjects={subjects} /> ))}
    </div>
    )
}