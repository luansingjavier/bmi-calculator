const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/calculate-bmi-metric", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  const { heightInCm, weightInKg } = req.body;

  if (!heightInCm || !weightInKg) {
    return res.status(400).json({ error: "Height and weight are required" });
  }

  const heightInM = heightInCm / 100;
  const bmi = weightInKg / (heightInM * heightInM);

  res.json({ bmi });
});

app.post("/calculate-bmi-us", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  const { feet, inches, pounds } = req.body;

  if (!feet || !inches || !pounds) {
    return res
      .status(400)
      .json({ error: "Feet, inches, and pounds are required" });
  }

  const heightInInches = feet * 12 + inches;
  const bmi = (pounds / (heightInInches * heightInInches)) * 703;

  res.json({ bmi });
});

app.post("/calculate-bmi-us", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  const { feet, inches, pounds } = req.body;

  if (!feet || !inches || !pounds) {
    return res
      .status(400)
      .json({ error: "Feet, inches, and pounds are required" });
  }

  const heightInInches = feet * 12 + inches;
  const bmi = (pounds / heightInInches ** 2) * 703;

  res.json({ bmi });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
