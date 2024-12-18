export default async function ProductReview(props) {
  const param = await props.params;
  console.log(param)
  return <h1>this is product review page and catch all routes</h1>
}