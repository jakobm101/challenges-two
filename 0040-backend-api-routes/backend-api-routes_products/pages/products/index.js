import { useRouter } from "next/router";
import useSWR from "swr";

export default function Products() {
  const { data } = useSWR("/api/products/", (url) =>
    fetch(url).then((res) => res.json())
  );

  const { push } = useRouter();

  return (
    <>
      <h1>All the Products </h1>
      <ul>
        {data?.map((product) => (
          <button key={product.id} onClick={() => push(`products/${product.id}`)}>
            {product.name}
          </button>
        ))}
      </ul>
    </>
  );
}
