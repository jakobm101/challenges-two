import styled from "styled-components";
import useSWR from "swr";
import StyledButton from "@/components/Button";
import { useState, useImmutableState } from "react";

export default function ProductForm({
  data = { description: "", price: "", currency: "GBR", name: "" },
  isEditing,
  onEdit,
  closeForm,
}) {
  const { mutate } = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    if (isEditing) return onEdit(productData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>
        {isEditing ? "Edit fish" : "Add a new Fish"}
      </StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" defaultValue={data.name} />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={data.description}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          defaultValue={data.price}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency" defaultValue={data.currency}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBR">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">{isEditing ? "Edit" : "Submit"}</StyledButton>
      <StyledButton onClick={closeForm}>Cancel</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
