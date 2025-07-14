import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";
import Button from "@/components/Button";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditing, setIsEditing] = useState(false);
  const url = `/api/products/${id}`;

  const handleEdit = async (productData) => {
    console.log("handleEdit", productData);
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    mutate();
    setIsEditing(false);
  };

  const handleDelete = async () => {
    console.log("deleting dummy");
    await fetch(url, { method: "DELETE" });
    router.push("/");
  };

  const closeForm = () => setIsEditing(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <StyledLink href="/">Back to all</StyledLink>
        <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </ProductCard>
      {isEditing && (
        <ProductForm
          data={data}
          onEdit={handleEdit}
          isEditing={isEditing}
          closeForm={closeForm}
        />
      )}
    </>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
