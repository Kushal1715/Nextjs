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
  </div>
}