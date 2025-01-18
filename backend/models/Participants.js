const mongoose = require('mongoose');
const ParticipantsSchema = new mongoose.Schema({
    fullName: String,
    dob: Date,
    gender: String,
    maritalStatus: String,
    contactInfo: {
      address: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      phone: String,
      email: String,
    },
    socioeconomicData: {
      employmentStatus: String,
      occupation: String,
      educationLevel: String,
    },
    culturalEthnicBackground: {
      raceEthnicity: String,
      nationality: String,
      primaryLanguages: [String],
    },
    healthData: {
      heartRate: Number,
      bloodPressure: {
        systolic: Number,
        diastolic: Number,
      },
      respiratoryRate: Number,
      bodyTemperature: Number,
      oxygenSaturation: Number,
      weight: Number,
      height: Number,
      bmi: Number,
      ecg: String,
      bloodGlucose: Number,
      urineOutput: Number,
    },
    trailName: String, 
    visitSchedule: 
      {
        date: Date,
        status: String, // "scheduled", "completed", "missed"
      },
});
const Participants = mongoose.model("Participants", ParticipantsSchema);
module.exports = {Participants};