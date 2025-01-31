'use client'
import React, { useState, useEffect } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [particles, setParticles] = useState([]);
  
  // Function to handle the mouse movement
  const handleMouseMove = (e) => {
    const newParticle = {
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 20 + 5,  
      opacity: Math.random() * 0.1 + 0.3, 
      duration: Math.random() * 0.3 + 1, 
      offsetX: Math.random() * 7 - 2.5,  
      offsetY: Math.random() * 7 - 2.5,  
    };
    setParticles((prevParticles) => [...prevParticles, newParticle]);

    // Limit the number of particles
    if (particles.length > 10) {
      setParticles((prevParticles) => prevParticles.slice(1));
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
    } else {
      // Implement sign-in logic here
      console.log('Signed in with:', email);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center text-white h-screen bg-stone-950">
      {/* Smoke Effect Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-[#ff9900] opacity-[0.7]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y - particle.size / 2}px`,
            left: `${particle.x - particle.size / 2}px`,
            opacity: particle.opacity,
            animation: `smokeAnimation ${particle.duration}s ease-out infinite`,
            animationDelay: `${Math.random() * 2}s`, // Random delay for better effect
            transform: `translate(${particle.offsetX}px, ${particle.offsetY}px)`,
          }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-[-1]" />
      
      <div className="z-10 p-8 lg:p-24 grid gap-8 max-w-[500px] w-full mx-auto">
        <div className="text-center">
          <span className="font-bold text-[24px] md:text-[40px] bg-gradient-to-b from-[#000000] via-[#ff9900] to-[#0c0901] bg-clip-text text-transparent">
            Fragrance Fusion
          </span>
          <h3 className="text-[20px] font-semibold mt-4">Sign In to Your Account</h3>
        </div>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-[#1D1D1D] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#AB572D]"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-[#1D1D1D] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#AB572D]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#AB572D] rounded-lg font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="text-[#AB572D] font-semibold hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>

      {/* Smoke Animation CSS */}
      <style jsx>{`
        @keyframes smokeAnimation {
          0% {
            transform: translate(0, 0);
            opacity: 0.7;
          }
          100% {
            transform: translate(30px, -30px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SignIn;
