import { TextField } from "@mui/material";
import React, { useState } from "react";

function AddUser({ onAddUser }) {
  // First Initializing an empty data's for all field
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // Function to send the data to the onAddUser function in the App Component
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({ name: "", username: "", email: "", phone: "", website: "" });
  };

  return (
    <div className="container">
      <h1 className="sub-heading text-black">Add New User</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="Name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="User Name"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="Email Address "
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="Phone Number"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="Website"
          value={formData.website}
          onChange={(event) =>
            setFormData({ ...formData, website: event.target.value })
          }
        />
        <button type="submit" className="btn btn-success mt-4">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;