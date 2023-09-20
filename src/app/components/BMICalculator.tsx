"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/global.css";

function BMICalculator() {
  const [height, setHeight] = useState<number | string>("");
  const [heightInches, setHeightInches] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [bmiUS, setBMIUS] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("metric");

  const calculateMetricBMI = () => {
    const data = {
      heightInCm: height,
      weightInKg: weight,
    };

    fetch("http://localhost:4000/calculate-bmi-metric", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setBMI(data.bmi.toFixed(2));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const calculateUSBMI = () => {
    const data = {
      feet: height,
      inches: heightInches,
      pounds: weight,
    };

    console.log("data", data);

    fetch("http://localhost:4000/calculate-bmi-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setBMIUS(data.bmi.toFixed(2));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <h2>Metric Units</h2>
        <Form>
          <Form.Group>
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={calculateMetricBMI}>
            Calculate BMI
          </Button>
        </Form>
      </div>

      {bmi !== null && (
        <div className="mt-3 bmi-result">
          <p className="bmi-text">Your BMI is: {bmi}</p>
        </div>
      )}

      <div>
        <h2>US Units</h2>
        <Form>
          <Form.Group>
            <Form.Label>Height (feet)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter height in feet"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Height (inches)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter height in inches"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight (pounds)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter weight in pounds"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={calculateUSBMI}>
            Calculate BMI
          </Button>
        </Form>
      </div>

      {bmiUS !== null && (
        <div className="mt-3 bmi-result">
          <p className="bmi-text">Your BMI is: {bmiUS}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
