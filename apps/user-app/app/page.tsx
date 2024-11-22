"use client"

//since we are in app folder so we cannot use useRouter form next/router
//so this useRouter from next/navigation is a special router for this pupose
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useRef } from 'react';

const Home = () => {
  const router = useRouter();
  const signup = () => {
    router.push('api/auth/signin');
  };

  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (ctaRef.current) {
      window.scrollTo({
        top: ctaRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          src="https://www.helcim.com/videos/homepage-hero-with-smart-terminal-min4.webm"
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/50 to-black/10"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
            <div className="text-left md:w-1/2">
              <h1 className="text-6xl text-white drop-shadow-2xl mb-4">
                Welcome to Paysmart
              </h1>
              <p className="text-2xl text-white max-w-2xl mb-8">
                Your smart solution for seamless and secure payments.
              </p>
              <button
                onClick={signup}
                className="px-8 py-4 bg-green-600 text-white text-2xl rounded hover:bg-green-700 transition duration-300"
              >
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src="pana.png"
                alt="Paysmart"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="text-8xl mb-8">Hello!</div>
        <p className="text-2xl text-center max-w-2xl">
          Welcome to Paysmart, your smart solution for seamless and secure payments.
        </p>
        <p className="text-4xl text-center text-blue-600 mt-8 italic font-semibold">
          <span className="relative inline-block">
            <span className="relative z-10">Hoo smart toh Paysmart</span>
            <span className="absolute inset-0 bg-yellow-300 transform -skew-x-6 -skew-y-3"></span>
          </span>
        </p>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-4xl mb-8">Features</div>
        <p className="text-xl text-center max-w-2xl mb-8">
          Discover the features that make Paysmart the best choice for your payment needs.
        </p>
        <ul className="list-disc text-xl text-left max-w-2xl">
          <li className="mb-2">Peer-to-Peer Transfer: Easily send and receive money from friends and family.</li>
          <li className="mb-2">Adding Money: Quickly add funds to your account from your bank or other sources.</li>
          <li className="mb-2">Lock Money: Securely lock your funds to prevent unauthorized access.</li>
          <li className="mb-2">Transaction History: Keep track of all your transactions with detailed history.</li>
        </ul>
        {/* <button
          onClick={() => router.push('/features')}
          className="mt-8 px-8 py-4 bg-blue-600 text-white text-2xl rounded hover:bg-blue-700 transition duration-300"
        >
          View Features
        </button> */}
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="text-4xl mb-8">Pricing</div>
        <p className="text-xl text-center max-w-2xl mb-8">
          Choose a pricing plan that suits your business.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-2xl mb-4">Free</h3>
            <p className="text-lg mb-4">Basic features for personal use.</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Peer-to-Peer Transfer</li>
              <li>Transaction History</li>
            </ul>
            <button
              onClick={signup}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-2xl mb-4">Premium</h3>
            <p className="text-lg mb-4">Advanced features for businesses.</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Peer-to-Peer Transfer</li>
              <li>Adding Money</li>
              <li>Transaction History</li>
              <li>Lock Money</li>
            </ul>
            <button
              onClick={signup}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-2xl mb-4">Lifetime</h3>
            <p className="text-lg mb-4">All features with a one-time payment.</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Peer-to-Peer Transfer</li>
              <li>Adding Money</li>
              <li>Transaction History</li>
              <li>Lock Money</li>
              <li>Priority Support</li>
            </ul>
            <button
              onClick={signup}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
        <button
          onClick={scrollToNextSection}
          className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          ↓
        </button>
      </section>

      {/* Call to Action (CTA) Section */}
      <section ref={ctaRef} className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-4xl mb-8">Get Started with Paysmart</div>
        <p className="text-xl text-center max-w-2xl mb-8">
          Join thousands of satisfied customers who are using Paysmart for their payment needs. Sign up today and experience the difference!
        </p>
        <button
          onClick={signup}
          className="px-8 py-4 bg-green-600 text-white text-2xl rounded hover:bg-green-700 transition duration-300"
        >
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;