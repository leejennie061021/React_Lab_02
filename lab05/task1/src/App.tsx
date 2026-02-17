import UserCard from './UserCard';
import SkillList from './SkillList';
import { User, Skill } from './types';

const App = () => {
  const user: User = {
    name: 'Alice Johnson',
    email: 'alice@mail.com',
    age: 25
  };

  const skills: Skill[] = [
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'TypeScript', level: 'Intermediate' },
    { id: 3, name: 'CSS', level: 'Beginner' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <UserCard user={user}>
        <p>Bio: Frontend Developer passionate about UI/UX.</p>
      </UserCard>

      <h3>Skills</h3>
      <SkillList skills={skills} />
    </div>
  );
};

export default App;

