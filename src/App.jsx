import React, { useState } from "react";

const features = [
  { icon: "⚡", title: "Fast", text: "Built with React for a snappy, responsive experience that feels instant." },
  { icon: "🎨", title: "Modern UI", text: "A clean, minimal design with smooth animations that works on any screen size." },
  { icon: "📦", title: "Easy to extend", text: "Component-based structure makes it simple to add pages and features." },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <span className="logo">My<span className="accent">Site</span></span>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={menuOpen ? "links open" : "links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Welcome to <span className="accent">My Site</span></h1>
        <p>A basic website built with React.js — clean, fast, and ready to grow.</p>
        <a href="#features" className="btn">Explore Features</a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>Features</h2>
        <p className="subtitle">Everything you need to get started, in one tidy place.</p>
        <div className="grid">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section alt">
      <div className="container">
        <h2>About</h2>
        <p className="subtitle">A little more about what this project is.</p>
        <p>
          This is a starter website created with React. It uses function components,
          hooks for state, and a small amount of CSS to keep things tidy. Use it as a
          base and customize the content, colors, and layout to make it yours.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <h2>Contact</h2>
        <p className="subtitle">Have a question? Drop us a line below.</p>
        {sent ? (
          <p className="thanks">Thanks! Your message has been received. ✅</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea rows="4" placeholder="Your message" required />
            <button type="submit" className="btn">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} My Site · Built with React.js</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
