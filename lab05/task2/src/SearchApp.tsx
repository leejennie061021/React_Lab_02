import { useState } from "react"
import type { User } from "./types"

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "c@mail.com", age: 28 },
  { name: "David", email: "d@mail.com", age: 22 },
  { name: "Eva", email: "e@mail.com", age: 35 }
]

export default function SearchApp() {
  const [users] = useState<User[]>(INITIAL_DATA)
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value
    setSearchTerm(term)

    setFilteredUsers(
      users.filter(u =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    )
  }

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    setSearchTerm("")
    setFilteredUsers(users)
  }

  return (
    <div>
      <h2>User Search</h2>

      <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search user"
      />

      <button onClick={handleClear}>Clear</button>

      {filteredUsers.length === 0 && <p>No results found</p>}

      {filteredUsers.map(user => (
        <div key={user.email}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  )
}