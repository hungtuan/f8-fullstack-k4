export const ProductDetail = ({ data }) => {
  const { id } = data;

  return `
      <h1>Product Detail: ${id}</h1>
      <button onclick="navigateTo('/products')">Back</button>
    `;
};
