'use client'
import { useState, useEffect } from "react"

export default function ClientSideDataFetching() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();

        if (data?.users) {
          setUsers(data.users)
        }
        setLoading(false)
      } catch (e) {
        setLoading(false);
        console.log(e)
      }
    }
    fetchUsers();
  }, [])

  if (loading) {
    return <h3 className="text-center text-3xl">Loading..please wait</h3>
  }
  return <div>
    <h1>Client side data fetching</h1>
    {users.map(user => (
      <div key={user.id}>
        <p>{user.firstName}</p>
      </div>
    ))}
  </div>
}