import UserCard from "./components/UserCard"
import SkillList from "./components/SkillList"
import type { Skill, User } from "./types"
export default function App() {

  const user: User = {
    name: "Alice",
    email: "alice@mail.com",
    age: 25
  }

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "CSS", level: "Beginner" }
  ]

  return (
    <>
      <UserCard user={user}>
        <p>Bio: Software Developer</p>
      </UserCard>

      <SkillList skills={skills} />
    </>
  )
}