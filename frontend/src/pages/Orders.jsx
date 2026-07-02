import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    price: "",
    total: "",
  });

  const [editId, setEditId] = useState(null);

  const getOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bills");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/bills/${editId}`,
          form
        );
        alert("Order Updated Successfully");
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/bills", form);
        alert("Order Added Successfully");
      }

      setForm({
        customerName: "",
        productName: "",
        quantity: "",
        price: "",
        total: "",
      });

      getOrders();
    } catch (err) {
      console.log(err);
      alert("Operation Failed");
    }
  };

  const editOrder = (order) => {
    setForm(order);
    setEditId(order._id);
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bills/${id}`);
      alert("Order Deleted Successfully");
      getOrders();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };
  return (
  <div style={{ padding: "20px" }}>
    <h2>Orders Management</h2>

    <input
      name="customerName"
      placeholder="Customer Name"
      value={form.customerName}
      onChange={handleChange}
    />
    <br /><br />

    <input
      name="productName"
      placeholder="Product Name"
      value={form.productName}
      onChange={handleChange}
    />
    <br /><br />

    <input
      name="quantity"
      placeholder="Quantity"
      value={form.quantity}
      onChange={handleChange}
    />
    <br /><br />

    <input
      name="price"
      placeholder="Price"
      value={form.price}
      onChange={handleChange}
    />
    <br /><br />

    <input
      name="total"
      placeholder="Total"
      value={form.total}
      onChange={handleChange}
    />
    <br /><br />

    <button onClick={handleSubmit}>
      {editId ? "Update Order" : "Add Order"}
    </button>

    <br /><br />

    <table border="1" cellPadding="10" width="100%">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.customerName}</td>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td>{order.total}</td>
            <td>
              <button onClick={() => editOrder(order)}>
                Edit
              </button>{" "}
              <button onClick={() => deleteOrder(order._id)}>
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

export default Orders;