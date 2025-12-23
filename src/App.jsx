import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= APP ================= */
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
        <MusicToggle />
        <FloatingHearts />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/promises" element={<Promises />} />
            <Route path="/love" element={<Love />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

/* ================= NAVBAR ================= */
function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/story", label: "Story" },
    { to: "/memories", label: "Memories" },
    { to: "/promises", label: "Promises" },
    { to: "/love", label: "Love" },
    { to: "/quotes", label: "Quotes" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-full shadow-xl flex gap-4 text-sm z-20">
      {links.map((l) => (
        <Link key={l.to} to={l.to} className="hover:text-pink-400 transition">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

/* ================= LAYOUT ================= */
function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-6"
    >
      {children}
    </motion.div>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      className={`max-w-lg w-full bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl text-center space-y-4 border border-white/20 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

/* ================= PAGES ================= */
function Home() {
  return (
    <Page>
      <Card>
        <h1 className="text-3xl font-bold text-pink-300">Hey My Love 🤍</h1>
        <p className="text-sm leading-relaxed text-gray-200">
          Welcome to our special corner.  
          Every word, every memory here is just for you.
        </p>
        <Link className="btn" to="/story">
          Start Journey 💫
        </Link>
      </Card>
      <Card>
        <h2 className="text-2xl font-semibold text-purple-300">Special Memories</h2>
        <p className="text-gray-200">Every moment with you is unforgettable.</p>
        <Link className="btn" to="/memories">
          See Memories
        </Link>
      </Card>
    </Page>
  );
}

function Story() {
  return (
    <Page>
      <Card>
        <h2 className="title text-pink-300">Our Story 📖</h2>
        <p className="text-gray-200">
          Somewhere between laughs and late talks, you became my favorite person.
        </p>
      </Card>
      <Card>
        <p className="text-gray-200">You gave meaning to moments I never noticed before.</p>
      </Card>
    </Page>
  );
}

function Memories() {
  const memories = [
    "Your smile",
    "Our inside jokes",
    "Late-night calls",
    "Unplanned laughter",
    "Shared dreams",
  ];
  return (
    <Page>
      {memories.map((m, i) => (
        <Card key={i} className="text-pink-300">✨ {m}</Card>
      ))}
      <Card>
        <Link className="btn" to="/promises">
          My Promise 🤞
        </Link>
      </Card>
    </Page>
  );
}

function Promises() {
  return (
    <Page>
      <Card>
        <h2 className="title text-purple-300">My Promises 💍</h2>
        <ul className="space-y-2 text-left text-gray-200">
          <li>❤️ I’ll listen carefully</li>
          <li>❤️ I’ll respect your feelings</li>
          <li>❤️ I’ll choose you daily</li>
          <li>❤️ I’ll never stop loving you</li>
        </ul>
      </Card>
      <Card>
        <Link className="btn" to="/love">
          Reveal Love 💖
        </Link>
      </Card>
    </Page>
  );
}

function Love() {
  return (
    <Page>
      <Card>
        <h2 className="text-3xl font-semibold text-pink-300">I Love You Forever 💞</h2>
        <p className="mt-2 text-gray-200">This heart is yours, today and always.</p>
        <LoveMeter />
      </Card>
      <Card>
        <p className="text-gray-200">Thank you for reading till the end 🤍</p>
      </Card>
    </Page>
  );
}

function Quotes() {
  const [quote, setQuote] = useState("Love is not finding someone to live with…");

  const quotes = [
    "Love is not finding someone to live with, it's finding someone you can't live without.",
    "You are my today and all of my tomorrows.",
    "Every love story is beautiful, but ours is my favorite.",
    "I love you not only for what you are, but for what I am when I am with you.",
  ];

  const generateQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <Page>
      <Card>
        <h2 className="title text-purple-300">Love Quotes 💌</h2>
        <p className="italic text-gray-200">"{quote}"</p>
        <button onClick={generateQuote} className="btn">
          New Quote 💖
        </button>
      </Card>
    </Page>
  );
}

function Toast({ message, show }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={show ? { y: 20, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full shadow-lg z-50"
    >
      {message}
    </motion.div>
  );
}


/* ================= FUNCTIONS ================= */
function MusicToggle() {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    if (play) audioRef.current.play();
    else audioRef.current.pause();
  }, [play]);

  // Hide toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/Dhun Saiyaara - Saiyaara 128 Kbps.mp3"
      />
      <button
        onClick={() => setPlay(!play)}
        className="fixed top-6 right-6 bg-black/70 px-4 py-2 rounded-full shadow text-white hover:bg-pink-500 transition"
      >
        {play ? "Pause 🎵" : "Play 🎶"}
      </button>
      <Toast message="Please play the song 🎶" show={showToast} />
    </>
  );
}


function LoveMeter() {
  const [love, setLove] = useState(0);

  return (
    <div className="space-y-3 mt-4">
      <p className="text-sm text-gray-200">Love Level: {love}%</p>
      <div className="w-full bg-pink-900/50 h-3 rounded-full overflow-hidden">
        <motion.div className="h-full bg-pink-500" animate={{ width: `${love}%` }} />
      </div>
      <button onClick={() => setLove(Math.min(love + 10, 100))} className="btn">
        Add Love 💖
      </button>
    </div>
  );
}

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => setHearts((h) => [...h, Math.random()]), 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", scale: 0.5, opacity: 0.7 }}
          animate={{ y: "-10vh", scale: 1, opacity: 0.9 }}
          transition={{ duration: 5, ease: "linear" }}
          className="absolute text-2xl"
          style={{ left: Math.random() * 100 + "%", color: "#ff8fc1" }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}

/* ================= STYLES ================= */
const btn =
  "inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition";
const title = "text-2xl font-semibold";

Object.assign(globalThis, { btn, title });
