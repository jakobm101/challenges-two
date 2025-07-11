import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }


  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <div
        style={{
          border: "black 1px solid",
          borderRadius: "12px",
          margin: "10px 0 10px 0 ",
            padding: "10px"
        }}
      >
        <h3>Reviews</h3>
        {!data.reviews.length && <p>No reviews yet</p>}
        <ul style={{ listStyle: "none", paddingInlineStart: "0", margin: "0" }}>
          {data.reviews.map((review, index) => {
            if (review?.text) {
              return (
                <li
                  key={index}
                  style={{
                    border: "1px solid black",
                    margin: "5px 0 5px 0",
                    padding: "10px",
                  }}
                >
                  <h4>{review.title}</h4>
                  <p>{review.text}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
