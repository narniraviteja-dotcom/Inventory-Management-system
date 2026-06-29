import React, { useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Rahul",
      product: "Laptop",
      quantity: 2,
      total: 110000,
    },
  ]);

  const [form, setForm] = useState({
    customer: "",
    product: "",
    quantity: "",
    total: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editId) {
      setOrders(
        orders.map((o) =>
          o.id === editId ? { ...form, id: editId } : o
        )
      );
      setEditId(null);
    } else {
      setOrders([...orders, { id: Date.now(), ...form }]);
    }

    setForm({
      customer: "",
      product: "",
      quantity: "",
      total: "",
    });
  };

  const editOrder = (order) => {
    setForm(order);
    setEditId(order.id);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders Management</h2>

      <input
        name="customer"
        placeholder="Customer Name"
        value={form.customer}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="product"
        placeholder="Product"
        value={form.product}
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
        name="total"
        placeholder="Total Price"
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
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>
                <button onClick={() => editOrder(order)}>Edit</button>{" "}
                <button onClick={() => deleteOrder(order.id)}>
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