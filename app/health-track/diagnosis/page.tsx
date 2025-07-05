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
      href: '/health-track/diagnosis/hypothyroidism',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {diseases.map((disease) => (
        <Link
          key={disease.name}
          href={disease.href}
          className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 text-gray-900 shadow-xl hover:scale-105 transition backdrop-blur-sm min-h-[340px] flex flex-col justify-between"
        >
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={disease.img}
              alt={disease.name}
              width={400}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4 text-center font-sans">{disease.name}</h2>
        </Link>
      ))}
    </div>
  );
}
