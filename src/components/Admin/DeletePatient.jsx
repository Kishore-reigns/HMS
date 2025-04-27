import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';

const DeletePatient = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);


  const fetchPatients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/patient/getPatients'); 
      setPatients(res.data);
      setFilteredPatients(res.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = patients.filter(pat =>
        pat.firstName.toLowerCase().includes(value)
    );
    setFilteredPatients(filtered);
  };


  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/deletePatient/${email}`);
      alert('Patient deleted successfully!');
      fetchPatients(); 
    } catch (error) {
      console.error('Error deleting patient:', error);
      alert('Failed to delete patient');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Search Patient by Name"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 3 }}
      />

      <List>
        {filteredPatients.map((pat) => (
          <ListItem
            key={pat._id}
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
              primary={pat.firstName + pat.lastName} 
              secondary={pat.email} 
            />
            <Button 
              variant="contained" 
              color="error"
              onClick={() => handleDelete(pat.email)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DeletePatient;
