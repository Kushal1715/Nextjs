import Link from "next/link";

async function FetchUsers() {
  try {
    const response = await fetch('https://dummyjson.com/users')
    const result = await response.json();
    return result.users
  } catch (error) {
    throw new Error(error)
  }
}


export default async function ServerSideDataFetching() {
  const users = await FetchUsers()
  console.log(users)
  return <div>
    <h1>Server side data fetching</h1>
    <h1>Users</h1>
    <ul>
      {users && users.length > 0 && users.map((user, index) =>
        <Link href={`/server-data-fetch/${user.id}`}>
          <li className="mt-2 cursor-pointer hover:underline" key={index}>{user.firstName}</li>
        </Link>)}
    </ul>
  </div>
}