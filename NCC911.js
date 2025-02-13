const express = require('express');
const app = express();
const port = 5500;
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Holy Crap, Batman!!');
});

app.listen(5501, () => {
    app.post("/submit", (req, res) => {
    const { "FullName": fullName, "locationIncident": locationIncident, "phone-number": phoneNumber,"Addition Information": Information } = req.body;
    
    console.log("Form submitted:", { fullName, locationIncident, phoneNumber, Information });
  
    res.send(`
      <h1>Form Submitted Successfully!</h1>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Location of Incident:</strong> ${locationIncident}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Additional Information:</strong> ${Information}</p>
    `);
  });
});
app.listen(5500, () => {
    console.log(`Server is running on port ${port}`);
});