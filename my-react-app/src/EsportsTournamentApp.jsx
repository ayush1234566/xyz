import React, { useState } from 'react';

const EsportsTournamentApp = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
  });

  const [leaderboard, setLeaderboard] = useState([
    { team: 'Team Alpha', points: 90 },
    { team: 'Team Bravo', points: 80 },
    { team: 'Team Delta', points: 70 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Team ${formData.teamName} registered!`);
    // Logic to store data in DB will go here
    setFormData({ teamName: '', player1: '', player2: '', player3: '', player4: '' });
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">eSportsWeb</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#features" className="hover:text-cyan-400">Features</a>
            <a href="#register" className="hover:text-cyan-400">Register</a>
            <a href="#leaderboard" className="hover:text-cyan-400">Leaderboard</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Managing esports tournaments made easy</h1>
        <p className="mb-6 text-lg md:text-xl">eSportsWeb.in is a powerful platform built for esports lovers to create, manage, and dominate tournaments effortlessly.</p>
        <a href="#register" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-50 transition">Go to Dashboard</a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Create and manage tournaments",
            "Register players and teams",
            "Automated match scheduling",
            "Live result updates",
            "Real-time leaderboards",
            "Prize distribution management",
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">This feature helps enhance tournament experience.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-white px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Register Your Team</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            placeholder="Team Name"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          {[1, 2, 3, 4].map((n) => (
            <input
              key={n}
              type="text"
              name={`player${n}`}
              value={formData[`player${n}`]}
              onChange={handleChange}
              placeholder={`Player ${n}`}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
          ))}
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">Register Team</button>
        </form>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-20 bg-gray-100 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Leaderboard</h2>
        <table className="w-full table-auto bg-white rounded shadow overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Team</th>
              <th className="py-3 px-4 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="py-3 px-4">{entry.team}</td>
                <td className="py-3 px-4">{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-4">For inquiries, support or partnerships:</p>
        <p className="font-medium">Email: <a href="mailto:2121bo518@gmail.com" className="text-indigo-600 hover:underline">2121bo518@gmail.com</a></p>
        <p className="font-medium">Phone: <a href="tel:+917488747188" className="text-indigo-600 hover:underline">+91 7488747188</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} eSportsWeb.in. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EsportsTournamentApp;
