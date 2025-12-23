import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#ff758c] via-[#ffb199] to-[#c77dff] text-white overflow-hidden">
        <FloatingHearts />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/sorry" element={<Sorry />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/promise" element={<Promise />} />
            <Route path="/forgive" element={<Forgive />} />
            <Route path="/love" element={<Love />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

/* ================= NAVBAR (MOBILE FRIENDLY) ================= */
function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/story", label: "Story" },
    { to: "/sorry", label: "Sorry" },
    { to: "/memories", label: "Memories" },
    { to: "/promise", label: "Promise" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 md:static bg-white/20 backdrop-blur-xl md:bg-transparent">
      <div className="flex justify-around md:justify-center md:gap-6 py-3 text-xs md:text-base font-semibold">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="px-3 py-2 rounded-full bg-white/20 md:bg-transparent">
            {l.label}
          </Link>
        ))}
      </div>
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
      className="px-4 pt-16 pb-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </motion.div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white/25 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl">
      {children}
    </div>
  );
}

/* ================= PAGES ================= */
function Home() {
  return (
    <Page>
      <Card>
        <h1 className="text-4xl font-bold mb-3">Hey My Love Choti Bacchi ❤️</h1>
        <p>This entire website exists because you matter to me. And i really love you i don't know what is happening in our relationship small talks is becoming a big fight.</p>
      </Card>
      <Card>
        <p>Swipe through each page slowly.
        Every card holds a feeling meant only for you and I Love You Choti Bacchi🤍</p>
        <Link to="/story" className="btn">Start Journey 💫</Link>
      </Card>
    </Page>
  );
}

function Story() {
  return (
    <Page>
      <Card>
        <h2 className="title">Our Story 📖</h2>
        <p>Somewhere between laughs and late talks, you became my favorite person.</p>
      </Card>
      <Card>
        <p>You gave meaning to moments I never noticed before.</p>
      </Card>
    </Page>
  );
}

function Sorry() {
  return (
    <Page>
      <Card>
        <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-5xl">❤️</motion.div>
        <h2 className="title">I'm Sorry</h2>
        <p>I made mistakes, and I own them.
        Hurting you was never my intention.</p>
      </Card>
      <Card>
        <p>You deserve honesty, effort, and care — not excuses.</p>
        <Link to="/memories" className="btn">Next 💭</Link>
      </Card>
    </Page>
  );
}

function Memories() {
  const memories = ["Your smile", "Our inside jokes", "Late-night calls", "Unplanned laughs"];
  return (
    <Page>
      {memories.map((m, i) => (
        <Card key={i}>✨ {m}</Card>
      ))}
      <Card>
        <Link to="/promise" className="btn">My Promise 🤞</Link>
      </Card>
    </Page>
  );
}

function Promise() {
  return (
    <Page>
      <Card>
        <h2 className="title">My Promises 💍</h2>
        <ul className="space-y-2">
          <li>❤️ I'll listen carefully</li>
          <li>❤️ I'll respect your feelings</li>
          <li>❤️ I'll choose you daily</li>
        </ul>
      </Card>
      <Card>
        <Link to="/forgive" className="btn">One Question 🥺</Link>
      </Card>
    </Page>
  );
}

function Forgive() {
  const navigate = useNavigate();
  const [move, setMove] = useState(false);
  return (
    <Page>
      <Card>
        <h2 className="title">Will You Forgive Me?</h2>
      </Card>
      <Card>
        <div className="flex justify-around">
          <button onClick={() => navigate("/love")} className="btn-green">Yes 💖</button>
          <motion.button onMouseEnter={() => setMove(!move)} animate={{ x: move ? 80 : 0 }} className="btn-gray">No 🙈</motion.button>
        </div>
      </Card>
    </Page>
  );
}

function Love() {
  return (
    <Page>
      <Card>
        <h2 className="text-4xl font-bold">I Love You Forever Choti Bacchi 💞</h2>
        <p className="mt-4">This heart is yours, today and always.</p>
      </Card>
      <Card>
        <p>Thank you for reading till the end 🤍</p>
      </Card>
    </Page>
  );
}

/* ================= EFFECTS ================= */
function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const i = setInterval(() => setHearts((h) => [...h, Math.random()]), 600);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div key={i} initial={{ y: "100vh" }} animate={{ y: "-10vh" }} transition={{ duration: 7 }} className="absolute text-2xl" style={{ left: Math.random() * 100 + "%" }}>❤️</motion.div>
      ))}
    </div>
  );
}

/* ================= BUTTON STYLES ================= */
const btn = "inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 font-semibold shadow-lg text-center";
const btnGreen = "px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 font-bold";
const btnGray = "px-6 py-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 font-bold";
const title = "text-3xl font-semibold mb-4";

Object.assign(globalThis, { btn, btnGreen, btnGray, title });