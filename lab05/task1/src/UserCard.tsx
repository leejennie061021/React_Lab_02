import { User } from './types';

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: React.ReactNode;
}

const UserCard = ({
  user,
  isActive = true,
  children
}: UserCardProps) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '16px',
        opacity: isActive ? 1 : 0.5
      }}
    >
      <h2>{user.name}</h2>
      <p>
        {user.email} | Age: {user.age}
      </p>
      {children}
    </div>
  );
};

export default UserCard;
