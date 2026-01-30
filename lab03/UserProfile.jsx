import {useEffect, useState} from "react";

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Failed to load user');
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

       return () => controller.abort();
  }, [userId]); 
    if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!user) return null;

  return (
    <div style={{ border: "1px solid #aaa", padding: "15px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default UserProfile;