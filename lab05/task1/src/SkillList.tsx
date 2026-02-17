import { Skill, SkillLevel } from './types';

interface SkillListProps {
  skills: Skill[];
}

const getColorByLevel = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner':
      return 'green';
    case 'Intermediate':
      return 'orange';
    case 'Expert':
      return 'red';
    default:
      return 'black';
  }
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li
          key={skill.id}
          style={{ color: getColorByLevel(skill.level) }}
        >
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
