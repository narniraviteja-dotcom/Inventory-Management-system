import React, { useEffect, useState } from "react";
import axios from "axios";

function Company() {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [companies, setCompanies] = useState([]);
  const [editId, setEditId] = useState(null);

  const getCompanies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/companies");
      setCompanies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const addCompany = async () => {
  try {
    if (editId) {
      await axios.put(`http://localhost:5000/api/companies/${editId}`, {
        companyName,
        ownerName: contactPerson,
        email,
        phone,
        address,
      });

      alert("Company Updated Successfully");
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/companies", {
        companyName,
        ownerName: contactPerson,
        email,
        phone,
        address,
      });

      alert("Company Added Successfully");
    }

    setCompanyName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setAddress("");

    getCompanies();
  } catch (err) {
    console.log(err);
    alert("Operation Failed");
  }
};
  const deleteCompany = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/companies/${id}`);
    alert("Company Deleted Successfully");
    getCompanies();
  } catch (err) {
    console.log(err);
    alert("Delete Failed");
  }
};
const editCompany = (company) => {
  setCompanyName(company.companyName);
  setContactPerson(company.ownerName);
  setEmail(company.email);
  setPhone(company.phone);
  setAddress(company.address);
  setEditId(company._id);
};
  return (
    <div style={{ padding: "20px" }}>
  <h2>Company Management</h2>

  <div
    style={{
      width: "400px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      marginBottom: "20px",
    }}
  >
    <input
      type="text"
      placeholder="Company Name"
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />

    <input
      type="text"
      placeholder="Contact Person"
      value={contactPerson}
      onChange={(e) => setContactPerson(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />

    <input
      type="text"
      placeholder="Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />

    <textarea
      placeholder="Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />

    <button
      onClick={addCompany}
      style={{
        width: "100%",
        padding: "10px",
        background: "#1976d2",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {editId ? "Update Company" : "Add Company"}
    </button>
  </div>

  <table
    border="1"
    cellPadding="10"
    style={{ width: "100%", borderCollapse: "collapse" }}
  >
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Contact Person</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {companies.map((company) => (
        <tr key={company._id}>
  <td>{company.companyName}</td>
  <td>{company.ownerName}</td>
  <td>{company.email}</td>
  <td>{company.phone}</td>
  <td>{company.address}</td>

  <td>
    <button onClick={() => editCompany(company)}>
  Edit
</button>
{" "}
<button onClick={() => deleteCompany(company._id)}>
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

export default Company;