const express = require('express');
const app = express();
const { Participants } = require('./models/Participants');
app.use(express.json());

const {authRouter} = require('./routes/authrouter');

app.use('/api/v1/auth', authRouter);

app.post('/participants', async (req, res) => {
    try {
      const participantData = req.body;
      const newParticipant = new Participants(participantData);
      const savedParticipant = await newParticipant.save();
      res.status(201).json({
        message: 'Participant added successfully!',
        participant: savedParticipant,
      });
    } catch (error) {
      console.error('Error adding participant:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/participants', async (req, res) => {
    try {
    
      const participants = await Participants.find();
  
    
      res.status(200).json(participants);
    } catch (error) {
      console.error('Error fetching participants:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.delete('/participants/:id', async (req, res) => {
    const { id } = req.params; 
  
    try {
      
      const participant = await Participants.findByIdAndDelete(id);
      if (!participant) {
        return res.status(404).json({ error: 'Participant not found' });
      }

      res.status(200).json({ message: 'Participant deleted successfully', participant });
    } catch (error) {
      console.error('Error deleting participant:', error);
  
      
      if (error.name === 'CastError') {
        return res.status(400).json({ error: 'Invalid ObjectId format' });
      }
  
      
      res.status(500).json({ error: 'Failed to delete participant' });
    }
  });
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://dbuser:shanmuk1234@cluster0.xzvp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const uri = dbURI; // Ensure this is set in your Render environment variables

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Increase the timeout to 10 seconds
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("server running in 8000");
})