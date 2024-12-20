async function fetchSingleUser(userId) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`)
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error)
  }
}

export default async function UserDetails(props) {
  const params = await props.params;

  const singleUser = await fetchSingleUser(params.userDetails)
  return <div>
    <h1>This is user detail page</h1>
    <h2>User Details:</h2>
    <p>{singleUser.firstName}</p>
    <p>{singleUser.lastName}</p>
    <p>{singleUser.email}</p>
  </div>
}