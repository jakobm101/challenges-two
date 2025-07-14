import styled from "styled-components";
import StyledButton from "@/components/Button";

export default function ProductForm({
  data = { description: "", price: "", currency: "GBR", name: "" },
  isEditing,
  onSubmit,
  closeForm,
}) {

  async function handleSubmitPreparation(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    onSubmit(productData)
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmitPreparation}>
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
