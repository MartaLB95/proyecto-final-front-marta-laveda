import SubjectGroup from "../components/SubjectGroup";

export default function Subjects() {
        const subjects = [
        { name: "Art History", letter: "A" },
        { name: "Biology", letter: "B" },
        { name: "Chemestry", letter: "C" },
        ]
        const letters = ["A", "B", "C"]
    return (
    <div>
    {["A","B","C"].map(l => ( <SubjectGroup key={l} letter={l} subjects={subjects} /> ))}
    </div>
    )
}