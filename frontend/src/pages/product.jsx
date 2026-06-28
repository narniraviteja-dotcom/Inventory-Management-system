import React, { useState } from "react";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: "55000",
      quantity: "10",
      company: "ABC Pvt Ltd",
    },
    {
      id: 2,
      name: "Mouse",
      price: "500",
      quantity: "50",
      company: "ABC Pvt Ltd",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    company: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.quantity || !form.company) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      setProducts(
        products.map((p) =>
          p.id === editId ? { ...form, id: editId } : p
        )
      );
      setEditId(null);
    } else {
      setProducts([
        ...products,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      name: "",
      price: "",
      quantity: "",
      company: "",
    });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product.id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Management</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        {editId ? "Update Product" : "Add Product"}
      </button>

      <br /><br />

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.company}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                {" "}
                <button onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;