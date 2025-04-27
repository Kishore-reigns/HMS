import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';

const DeleteDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);


  const fetchDoctors = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/doctor/getDoctors'); 
      setDoctors(res.data);
      setFilteredDoctors(res.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = doctors.filter(doc =>
      doc.firstName.toLowerCase().includes(value)
    );
    setFilteredDoctors(filtered);
  };


  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/deleteDoctor/${email}`);
      alert('Doctor deleted successfully!');
      fetchDoctors(); 
    } catch (error) {
      console.error('Error deleting doctor:', error);
      alert('Failed to delete doctor');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Search Doctor by Name"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 3 }}
      />

      <List>
        {filteredDoctors.map((doctor) => (
          <ListItem
            key={doctor._id}
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 1, 
              border: '1px solid #ccc', 
              borderRadius: '8px',
              p: 2 
            }}
          >
            <ListItemText 
              primary={doctor.firstName + doctor.lastName} 
              secondary={doctor.email} 
            />
            <Button 
              variant="contained" 
              color="error"
              onClick={() => handleDelete(doctor.email)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DeleteDoctor;
