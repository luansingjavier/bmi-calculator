import React from "react";
import Head from "next/head";
import BMICalculator from "./components/BMICalculator";
import "../app/styles/global.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BMI Calculator</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Head>

      <main>
        <h1 className="bmi">BMI Calculator</h1>
        <BMICalculator />
      </main>
    </div>
  );
}
