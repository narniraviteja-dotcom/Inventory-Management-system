import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    company: "",
  });

  const [editId, setEditId] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.quantity || !form.company) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/${editId}`, {
          productName: form.name,
          category: form.company,
          price: Number(form.price),
          quantity: Number(form.quantity),
        });

        alert("Product Updated Successfully");
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/products", {
          productName: form.name,
          category: form.company,
          price: Number(form.price),
          quantity: Number(form.quantity),
        });

        alert("Product Added Successfully");
      }

      setForm({
        name: "",
        price: "",
        quantity: "",
        company: "",
      });

      getProducts();
    } catch (err) {
      console.log(err);
      alert("Operation Failed");
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.productName,
      price: product.price,
      quantity: product.quantity,
      company: product.category,
    });

    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      alert("Product Deleted Successfully");
      getProducts();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
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
      <br />
      <br />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="text"
        name="company"
        placeholder="Category"
        value={form.company}
        onChange={handleChange}
      />
      <br />
      <br />

      <button onClick={handleSubmit}>
        {editId ? "Update Product" : "Add Product"}
      </button>

      <br />
      <br />

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>{" "}
                <button onClick={() => handleDelete(product._id)}>
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