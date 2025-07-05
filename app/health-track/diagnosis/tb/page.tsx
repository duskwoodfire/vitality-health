'use client';
import { useState } from 'react';

const questions = [
  "Do you have a persistent cough for more than 3 weeks?",
  "Are you coughing up blood or mucus?",
  "Do you have chest pain while breathing or coughing?",
  "Do you feel unexplained fatigue or weakness?",
  "Have you experienced sudden weight loss?",
  "Do you have night sweats?",
  "Do you experience chills or fever?",
  "Have you lost your appetite?",
  "Have you been in contact with a TB patient?",
  "Have you had a TB test or treatment in the past?",
];

const options = ["Yes", "No", "Don't Know"];

export default function TBForm() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [basics, setBasics] = useState({ age: '', gender: '', height: '', weight: '' });
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (qIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const handleBasics = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBasics({ ...basics, [e.target.name]: e.target.value });
  };

  const handleCheckRisk = () => {
    const yesCount = Object.values(answers).filter((a) => a === 'Yes').length;
    const riskPercent = Math.round((yesCount / questions.length) * 100);

    let level = 'Low Risk';
    if (riskPercent >= 70) level = 'High Risk';
    else if (riskPercent >= 40) level = 'Moderate Risk';

    setResult(`${level} — ${riskPercent}% chance based on symptoms`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-blue-200 space-y-6">
        <h1 className="text-3xl font-bold text-center">Tuberculosis - Symptom Checker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="age" type="number" placeholder="Age" className="p-3 rounded-md border" onChange={handleBasics} />
          <select name="gender" className="p-3 rounded-md border" onChange={handleBasics}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input name="height" placeholder="Height (cm)" className="p-3 rounded-md border" onChange={handleBasics} />
          <input name="weight" placeholder="Weight (kg)" className="p-3 rounded-md border" onChange={handleBasics} />
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="bg-white bg-opacity-70 p-4 rounded-xl shadow flex flex-col space-y-2">
              <p className="font-medium text-lg text-gray-900">{question}</p>
              <div className="flex gap-4">
                {options.map((option) => (
                  <label key={option} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={`q-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleAnswer(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleCheckRisk}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            Check Risk
          </button>
        </div>

        {result && (
          <div className="text-center mt-6">
            <p className="text-xl font-semibold text-blue-800 bg-blue-100 inline-block px-4 py-2 rounded-lg shadow">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
