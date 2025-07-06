'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function DiagnosisMainPage() {
  const diseases = [
    {
      name: 'Type 2 Diabetes',
      img: '/diabetes.jpeg',
      href: '/health-track/diagnosis/diabetes2',
    },
    {
      name: 'Coronary Artery Disease',
      img: '/cadimg.jpg',
      href: '/health-track/diagnosis/cad',
    },
    {
      name: 'Tuberculosis',
      img: '/tbimg.jpg',
      href: '/health-track/diagnosis/tb',
    },
    {
      name: 'Polycystic Ovary Syndrome (PCOS)',
      img: '/pcosimg.jpg',
      href: '/health-track/diagnosis/pcos',
    },
    {
      name: 'Chronic Kidney Disease (CKD)',
      img: '/kidney.jpg',
      href: '/health-track/diagnosis/ckd',
    },
    {
      name: 'Hypothyroidism',
      img: '/thyroid.jpg',
      href: '/health-track/diagnosis/thyroid',
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Health Risk Assessments</h1>
        <p className="text-gray-600 text-lg">
          Choose from a variety of medically reviewed symptom checkers to assess your potential health risks and take proactive steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {diseases.map((disease) => (
          <Link
            key={disease.name}
            href={disease.href}
            className="rounded-xl bg-white/40 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="w-full h-40 overflow-hidden rounded-t-xl">
              <Image
                src={disease.img}
                alt={disease.name}
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h2 className="text-center text-black text-md font-medium">{disease.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
