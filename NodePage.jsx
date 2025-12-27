import React from "react";
import "../styles/NodePage.css";

const NodePage = () => (
  <div className="node-page">
    {/* Hero Section */}
    <header className="hero">
      <h1 className="hero-title">Node.js</h1>
      <p className="hero-subtitle">
        A JavaScript runtime built on Chrome's V8 JavaScript engine.
      </p>
    </header>

    {/* Introduction to Node.js */}
    <section className="intro">
      <h2>What is Node.js?</h2>
      <p>
        Node.js is a <span className="highlight">JavaScript runtime</span>
        built on the <span className="highlight">V8 engine</span> by Google. 
        It enables JavaScript to be used for server-side scripting, allowing developers
        to use JavaScript for both front-end and back-end development. With Node.js, 
        developers can build fast, scalable network applications.
      </p>
      <p>
        It is primarily used for building web servers and networking tools. Node.js 
        is event-driven and non-blocking, which makes it well-suited for handling 
        multiple simultaneous connections efficiently.
      </p>
    </section>

    {/* Core Concepts Section */}
    <section className="core-concepts">
      <h2>Core Concepts of Node.js</h2>
      <div className="concept-grid">
        <div className="card">
          <h3>Asynchronous & Non-blocking I/O</h3>
          <p>
            Node.js operates asynchronously and performs I/O operations non-blocking,
            meaning it doesn’t wait for one task to complete before moving on to the next.
            This makes it very fast and efficient, especially for handling multiple connections.
          </p>
        </div>

        <div className="card">
          <h3>Event-Driven Architecture</h3>
          <p>
            Node.js operates on an event-driven model. The system responds to events (such as
            incoming HTTP requests) and executes callbacks for those events, enabling efficient
            event handling and scalability.
          </p>
        </div>

        <div className="card">
          <h3>Single-Threaded</h3>
          <p>
            Despite being single-threaded, Node.js can handle thousands of simultaneous 
            connections due to its non-blocking nature. It uses an event loop to manage 
            asynchronous operations without blocking the main thread.
          </p>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="features">
      <h2>Key Features of Node.js</h2>
      <div className="feature-grid">
        <div className="card feature-card">
          <h3>Fast and Lightweight</h3>
          <p>
            Node.js is built on Google's <span className="highlight">V8 JavaScript engine</span>,
            which is extremely fast, making it ideal for building high-performance web servers and applications.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Scalable</h3>
          <p>
            Node.js is highly scalable due to its asynchronous and event-driven nature, 
            allowing you to handle a large number of simultaneous connections.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Single Programming Language</h3>
          <p>
            Since both the client and server side code can be written in JavaScript, developers
            can work with a unified programming language across the entire application stack.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Huge Ecosystem</h3>
          <p>
            Node.js has access to the massive npm (Node Package Manager) ecosystem, which contains
            a vast collection of open-source libraries and packages.
          </p>
        </div>
      </div>
    </section>

    {/* Advanced Topics Section */}
    <section className="advanced-topics">
      <h2>Advanced Node.js Topics</h2>
      <div className="concept-grid">
        <div className="card">
          <h3>Streams</h3>
          <p>
            Node.js provides a powerful concept called streams, which allows you to work with
            large amounts of data efficiently by reading or writing the data in small chunks.
          </p>
        </div>

        <div className="card">
          <h3>Event Loop</h3>
          <p>
            The <span className="highlight">Event Loop</span> is what allows Node.js to handle 
            asynchronous operations. Understanding how the event loop works is key to optimizing performance.
          </p>
        </div>

        <div className="card">
          <h3>Cluster Module</h3>
          <p>
            Node.js uses a single thread for handling requests, but the <span className="highlight">Cluster Module</span> allows you to take advantage of multi-core systems by spawning multiple processes.
          </p>
        </div>
      </div>
    </section>

    {/* Node.js Performance Section */}
    <section className="performance">
      <h2>Performance Optimization</h2>
      <p>
        Node.js is designed for high performance, but there are several best practices for optimizing
        performance further:
      </p>
      <ul>
        <li>Use async methods to prevent blocking the event loop.</li>
        <li>Implement caching to avoid repeated computations.</li>
        <li>Optimize database queries to reduce response times.</li>
      </ul>
    </section>

    {/* Conclusion Section */}
    <footer className="cta">
      <h2>Conclusion</h2>
      <p>
        Node.js has revolutionized the way JavaScript is used by enabling developers to write fast,
        scalable, and high-performance server-side applications. With its powerful event-driven
        architecture and vast ecosystem, Node.js is an excellent choice for building modern web applications.
      </p>
      <a
        href="https://nodejs.org"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Learn More About Node.js
      </a>
    </footer>
  </div>
);

export default NodePage;
