import { useState, useEffect } from "react"

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchUser = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal }
        )

        if (!response.ok) throw new Error("Failed to fetch")

        const data = await response.json()
        setUser(data)
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

    // Cleanup prevents memory leaks
    return () => controller.abort()

  }, [userId]) // userId dependency ensures refetch when user changes

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return user ? (
    <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  ) : null
}

export default UserProfile