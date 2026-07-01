import { useState } from "react";

function Billing() {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [bill, setBill] = useState(null);

  const generateBill = () => {
    const total = Number(quantity) * Number(price);

    setBill({
      customerName,
      productName,
      quantity,
      price,
      total,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Billing</h1>

      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />

      <button onClick={generateBill}>Generate Bill</button>

      {bill && (
        <div style={{ marginTop: "20px" }}>
          <h2>Bill</h2>
          <p><b>Customer:</b> {bill.customerName}</p>
          <p><b>Product:</b> {bill.productName}</p>
          <p><b>Quantity:</b> {bill.quantity}</p>
          <p><b>Price:</b> ₹{bill.price}</p>
          <h3>Total: ₹{bill.total}</h3>
        </div>
      )}
    </div>
  );
}

export default Billing;