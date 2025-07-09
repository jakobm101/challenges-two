import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
  const { query, back } = useRouter();
  const { data: fish } = useSWR(`/api/products/${query?.id}`, (url) =>
    fetch(url).then((res) => res.json())
  );

  return (
    <>
      <h1>Being</h1>
      <button onClick={back}>back</button>
      {fish ? (
        <>
          <h5>{fish.category}</h5>
          <h3>{fish.name}</h3>

          <p>{fish.description}</p>
          <h4>{fish.price + fish.currency}</h4>

        </>
      ) : (
        "loading"
      )}
    </>
  );
}
