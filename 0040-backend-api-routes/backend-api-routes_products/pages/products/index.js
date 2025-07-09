import useSWR from "swr";

export default function Products() {
  const { data } = useSWR("/api/products/", (url) =>
    fetch(url).then((r) => r.json())
  );
    console.log('data', data);
    
  return (
    <>
      <h1>All the Products </h1>
    </>
  );
}
