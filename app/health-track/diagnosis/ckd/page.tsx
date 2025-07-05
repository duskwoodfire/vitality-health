'use client';
import { useState } from 'react';

const symptoms = [
  'Fatigue or weakness',
  'Swelling in feet or ankles',
  'Shortness of breath',
  'Nausea or vomiting',
  'Loss of appetite',
  'Frequent urination, especially at night',
  'Blood in urine',
  'Foamy or bubbly urine',
  'Dry or itchy skin',
  'Muscle cramps (especially at night)',
  'Difficulty concentrating',
  'High blood pressure',
];

export default function CKDChecker() {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    symptoms: {} as Record<string, string>,
  });
  const [result, setResult] = useState<string | null>(null);

  const handleSymptomChange = (symptom: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      symptoms: { ...prev.symptoms, [symptom]: value },
    }));
  };

  const handleInputChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckRisk = () => {
    const score = Object.values(form.symptoms).filter((v) => v === 'yes').length;
    const percent = Math.round((score / symptoms.length) * 100);
    let message = 'Low Risk';

    if (percent >= 70) message = 'High Risk';
    else if (percent >= 40) message = 'Moderate Risk';

    setResult(`${message} — ${percent}% symptoms matched`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">Chronic Kidney Disease - Symptom Checker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Age"
            value={form.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="p-3 border rounded-lg"
            type="number"
          />
          <input
            placeholder="Gender"
            value={form.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="p-3 border rounded-lg"
            type="text"
          />
          <input
            placeholder="Weight (kg)"
            value={form.weight}
            onChange={(e) => handleInputChange('weight', e.target.value)}
            className="p-3 border rounded-lg"
            type="number"
          />
          <input
            placeholder="Height (cm)"
            value={form.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
            className="p-3 border rounded-lg"
            type="number"
          />
        </div>

        <div className="space-y-4">
          {symptoms.map((symptom) => (
            <div key={symptom} className="p-4 bg-white rounded-xl shadow-sm border space-y-2">
              <div className="font-medium text-blue-900">{symptom}</div>
              <div className="flex gap-4">
                {['yes', 'no', 'don\'t know'].map((opt) => (
                  <label key={opt} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={symptom}
                      value={opt}
                      checked={form.symptoms[symptom] === opt}
                      onChange={() => handleSymptomChange(symptom, opt)}
                    />
                    <span className="capitalize">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleCheckRisk}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Check Risk
        </button>

        {result && (
          <div className="text-center text-lg font-semibold text-blue-800">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}
