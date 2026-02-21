import type { User } from "../types"
import type { ReactNode } from "react"

interface UserCardProps {
  user: User
  isActive?: boolean
  children: ReactNode
}

export default function UserCard({
  user,
  isActive = true,
  children
}: UserCardProps) {
  return (
    <div style={{ opacity: isActive ? 1 : 0.5 }}>
      <h2>{user.name}</h2>
      <p>
        {user.email} | Age: {user.age}
      </p>
      {children}
    </div>
  )
}