import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function EditUser({ user, onEditUser }) {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser(formData);
  };

  return (
    <div className="container">
      <h1 className="sub-heading">EDIT USER</h1>
      {/* Displaying all field for which the edit button is clicked */}
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
          Edit User
        </button>
      </form>
    </div>
  );
}

export default EditUser;