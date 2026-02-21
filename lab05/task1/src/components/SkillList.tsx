import type { Skill, SkillLevel } from "../types"

interface SkillListProps {
  skills: Skill[]
}

export default function SkillList({ skills }: SkillListProps) {
  const getColor = (level: SkillLevel) => {
    if (level === "Beginner") return "gray"
    if (level === "Intermediate") return "blue"
    return "green"
  }

  return (
    <ul>
      {skills.map(skill => (
        <li
          key={skill.id}
          style={{ color: getColor(skill.level) }}
        >
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  )
}