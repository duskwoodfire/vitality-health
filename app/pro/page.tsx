'use client';

import React from 'react';


export default function ProPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Vitality Pro Membership</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Unlock personalized healthcare services and priority access by becoming a Vitality Pro member.
        </p>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: '1 Month',
              price: '₹499',
              benefits: ['1 Free Appointment', 'Free Dental Checkup', 'Free Medicine Delivery'],
            },
            {
              title: '6 Months',
              price: '₹2499',
              benefits: ['3 Free Appointments', '2 Dental Checkups', 'Free Medicine Delivery', 'Priority Support'],
            },
            {
              title: '1 Year',
              price: '₹4499',
              benefits: [
                'Unlimited Appointments',
                'Quarterly Dental Checkups',
                '24/7 Medicine Delivery',
                'Priority Support',
                'Exclusive Health Tips',
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h2>
              <p className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</p>
              <ul className="text-sm text-gray-700 space-y-2">
                {plan.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="leading-tight">• {benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Membership Form */}
        <div className="rounded-2xl bg-white/50 backdrop-blur-md p-1 shadow-lg">
          <div className="rounded-2xl p-8 bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Join Vitality Membership</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                className="p-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="p-3 rounded-xl bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2">
                <option value="">Select Plan</option>
                <option value="1month">1 Month</option>
                <option value="6months">6 Months</option>
                <option value="yearly">Yearly</option>
              </select>
              <button
                type="submit"
                className="col-span-1 md:col-span-2 py-3 px-6 bg-gradient-to-r from-black to-gray-700 text-white font-semibold rounded-full hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact Us</h3>
          <p className="mb-1 text-gray-600">Phone: +91-9876543210</p>
          <p className="mb-1 text-gray-600">Email: support@vitalityhealth.in</p>
          <p className="text-gray-600">Address: 123 Wellness Street, Health City, India</p>
        </div>
      </div>
    </div>
  );
}
