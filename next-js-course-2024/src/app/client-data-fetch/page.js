'use client'
import { useState, useEffect } from "react"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSideDataFetching() {


  const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // const [loading, setLoading] = useState(false)
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       setLoading(true)
  //       const response = await fetch('https://dummyjson.com/users');
  //       const data = await response.json();

  //       if (data?.users) {
  //         setUsers(data.users)
  //       }
  //       setLoading(false)
  //     } catch (e) {
  //       setLoading(false);
  //       console.log(e)
  //     }
  //   }
  //   fetchUsers();
  // }, [])

  // if (loading) {
  //   return <h3 className="text-center text-3xl">Loading..please wait</h3>
  // }
  return <div>
    <h1>Client side data fetching</h1>
    {/* {users.map(user => (
      <div key={user.id}>
        <p>{user.firstName}</p>
      </div>
    ))} */}
    {data.users.map(user => (
      <div key={user.id}>
        <p>{user.firstName}</p>
      </div>
    ))}
  </div>
}