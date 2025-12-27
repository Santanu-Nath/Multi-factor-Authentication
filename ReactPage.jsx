import React from "react";
import "../styles/ReactPage.css";

const ReactPage = () => (
  <div className="react-page">
    {/* Hero Section */}
    <header className="hero">
      <h1 className="hero-title">React.js</h1>
      <p className="hero-subtitle">
        A JavaScript library for building user interfaces.
      </p>
    </header>

    {/* Introduction to React */}
    <section className="intro">
      <h2>What is React?</h2>
      <p>
        React is a <span className="highlight">JavaScript library</span> developed by Facebook for building 
        reusable UI components. It allows developers to create large web applications 
        that can update and render efficiently in response to data changes.
      </p>
      <p>
        React uses a declarative approach and the concept of a <span className="highlight">Virtual DOM</span> to optimize rendering and provide a smooth user experience.
      </p>
    </section>

    {/* Core Concepts Section */}
    <section className="core-concepts">
      <h2>Core Concepts of React</h2>
      <div className="concept-grid">
        <div className="card">
          <h3>Components</h3>
          <p>
            Components are the building blocks of React apps. They encapsulate UI and logic and can be reused.
          </p>
        </div>

        <div className="card">
          <h3>JSX Syntax</h3>
          <p>
            JSX is a syntax extension that looks similar to HTML, making it easier to write React components.
          </p>
        </div>

        <div className="card">
          <h3>State and Props</h3>
          <p>
            State represents mutable data managed within a component, while props are immutable inputs passed to components.
          </p>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="features">
      <h2>Key Features of React</h2>
      <div className="feature-grid">
        <div className="card feature-card">
          <h3>Declarative</h3>
          <p>
            React makes it painless to create interactive UIs by describing how the UI should look for each state.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Component-Based</h3>
          <p>
            Build encapsulated components that manage their own state and compose them to create complex UIs.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Virtual DOM</h3>
          <p>
            React keeps a lightweight copy of the real DOM and updates it efficiently using a reconciliation algorithm.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Rich Ecosystem</h3>
          <p>
            React has a large ecosystem of libraries, tools, and community support to enhance development.
          </p>
        </div>
      </div>
    </section>

    {/* Advanced Topics Section */}
    <section className="advanced-topics">
      <h2>Advanced React Topics</h2>
      <div className="concept-grid">
        <div className="card">
          <h3>Hooks</h3>
          <p>
            Hooks let you use state and other React features without writing a class.
          </p>
        </div>

        <div className="card">
          <h3>Context API</h3>
          <p>
            Provides a way to pass data through the component tree without passing props down manually at every level.
          </p>
        </div>

        <div className="card">
          <h3>React Router</h3>
          <p>
            Enables dynamic routing in React apps, allowing navigation without full page reloads.
          </p>
        </div>
      </div>
    </section>

    {/* Performance Section */}
    <section className="performance">
      <h2>Performance Optimization</h2>
      <p>
        React provides several ways to optimize performance, such as memoization, lazy loading, and code splitting.
      </p>
      <ul>
        <li>Use React.memo to avoid unnecessary re-renders.</li>
        <li>Use useMemo and useCallback hooks to memoize computations and functions.</li>
        <li>Lazy load components to reduce initial load time.</li>
      </ul>
    </section>

    {/* Conclusion Section */}
    <footer className="cta">
      <h2>Conclusion</h2>
      <p>
        React is a flexible and powerful library that simplifies building dynamic and performant user interfaces. Its component-based approach and rich ecosystem make it ideal for modern web development.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Learn More About React.js
      </a>
    </footer>
  </div>
);

export default ReactPage;
