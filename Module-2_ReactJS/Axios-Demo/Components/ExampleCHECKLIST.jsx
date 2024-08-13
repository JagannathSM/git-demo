// Checklist.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  TextField,
  Typography,
  IconButton,
  Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Checklist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setIsEditing(index);
    setEditedTask(tasks[index].text);
  };

  const handleSaveTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editedTask } : task
    );
    setTasks(updatedTasks);
    setIsEditing(null);
    setEditedTask('');
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 600, margin: '2rem auto', p: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 2 }}>
          Personalized Cleaning Checklist
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ ml: 2 }}>
            Add
          </Button>
        </Box>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
              />
              {isEditing === index ? (
                <TextField
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  sx={{ flex: 1, mr: 2 }}
                />
              ) : (
                <Typography
                  sx={{
                    flex: 1,
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.text}
                </Typography>
              )}
              {isEditing === index ? (
                <IconButton color="primary" onClick={() => handleSaveTask(index)}>
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton color="primary" onClick={() => handleEditTask(index)}>
                  <EditIcon />
                </IconButton>
              )}
              <IconButton color="error" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Checklist;
