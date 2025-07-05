import Layout from "./components/Layout"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-700 sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block text-black">Our Healthcare Platform</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-[#3b4438] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Your one-stop solution for health and wellness. Experience personalized care, expert consultations, and
          cutting-edge health tracking.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="flex justify-center gap-x-4 mt-6">
  <Link
    href="/consultation"
    className="flex items-center justify-center px-6 py-2 text-base font-semibold text-white bg-gradient-to-r from-black to-gray-700 rounded-full shadow-lg transition duration-300 hover:shadow-[0_0_15px_4px_rgba(75,85,99,0.5)]"
  >
    Book a Consultation
    <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
  </Link>

  <a
    href="https://www.practo.com/consult"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-6 py-2 text-base font-semibold text-white bg-gradient-to-r from-black to-gray-700 rounded-full shadow-lg transition duration-300 hover:shadow-[0_0_15px_4px_rgba(75,85,99,0.5)]"
  >
    Book via Practo
  </a>
</div>



        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-extrabold text-black text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-[#1d251a] tracking-tight">Health Products</h3>
                <p className="mt-5 text-base text-[#5b6955]">
                  Browse our curated selection of health and wellness products to support your journey.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <Users className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-black tracking-tight">Expert Consultations</h3>
                <p className="mt-5 text-base text-[#5b6955]">
                  Connect with healthcare professionals for personalized advice and treatment plans.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-[#1d251a] tracking-tight">Health Tracking</h3>
                <p className="mt-5 text-base text-[#5b6955]">
                  Monitor your health progress with our easy-to-use tracking tools and visualizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

