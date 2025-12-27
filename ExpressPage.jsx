// src/pages/ExpressPage.js
import React from "react";
import "../styles/ExpressPage.css";

const ExpressPage = () => (
  <div className="express-page">
    <header className="hero">
      <h1 className="hero-title">Express.js</h1>
      <p className="hero-subtitle">
        A minimalist and flexible Node.js web application framework.
      </p>
    </header>

    <section className="intro">
      <h2>What is Express.js?</h2>
      <p>
        Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies the process of building web applications by providing a robust set of features for building dynamic web applications and APIs. Express.js is a key component in the Node.js ecosystem and is widely used for both small and large-scale applications.
      </p>
    </section>

    <section className="features">
      <h2>Core Features of Express.js</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>Routing</h3>
          <p>Express.js provides a powerful and flexible routing system, allowing you to map URL patterns to handlers easily. Routes can be defined for different HTTP methods like GET, POST, PUT, DELETE, etc.</p>
        </div>
        <div className="feature-card">
          <h3>Middleware</h3>
          <p>Middleware functions in Express are functions that have access to the request, response, and next function in the application's request-response cycle. Middleware can be used for logging, authentication, error handling, etc.</p>
        </div>
        <div className="feature-card">
          <h3>Template Engines</h3>
          <p>Express supports various template engines (like EJS, Pug, and Handlebars), allowing you to render dynamic HTML pages with ease. It integrates seamlessly with front-end and back-end technologies.</p>
        </div>
      </div>
    </section>

    <section className="benefits">
      <h2>Why Choose Express.js?</h2>
      <div className="benefit-grid">
        <div className="benefit-card">
          <h3>Fast and Minimalist</h3>
          <p>Express is known for its speed and minimalistic design, providing just the essentials to get a web server up and running in no time.</p>
        </div>
        <div className="benefit-card">
          <h3>Highly Customizable</h3>
          <p>With Express, you have the flexibility to customize your app structure, add any middleware, and choose other technologies that best suit your needs.</p>
        </div>
        <div className="benefit-card">
          <h3>Strong Ecosystem</h3>
          <p>Express has a rich ecosystem with many open-source libraries and tools that can be integrated into your application for various functionalities such as authentication, validation, logging, etc.</p>
        </div>
      </div>
    </section>

    <section className="performance">
      <h2>Performance and Scalability</h2>
      <p>
        Express.js is optimized for performance. It can handle high loads, making it suitable for both small-scale and enterprise-level applications. The simplicity of its architecture makes it easy to scale horizontally, which is crucial when dealing with a large number of concurrent requests.
      </p>
      <p>
        With its non-blocking I/O architecture (through Node.js), Express can handle thousands of requests per second with minimal overhead. It's also extremely efficient when it comes to managing asynchronous operations, making it a go-to choice for modern web apps and RESTful APIs.
      </p>
    </section>

    <section className="use-cases">
      <h2>Use Cases of Express.js</h2>
      <div className="use-case-grid">
        <div className="use-case-card">
          <h3>Single Page Applications (SPAs)</h3>
          <p>Express can serve the backend of single-page applications, allowing you to build fast, interactive, and dynamic UIs that load content asynchronously from the server.</p>
        </div>
        <div className="use-case-card">
          <h3>RESTful APIs</h3>
          <p>Express is often used to build RESTful APIs due to its simplicity and the ability to easily define endpoints, handle HTTP requests, and send responses in different formats such as JSON.</p>
        </div>
        <div className="use-case-card">
          <h3>Microservices</h3>
          <p>Express’s lightweight design and modular architecture make it an ideal framework for building microservices-based applications that require rapid iteration and flexibility.</p>
        </div>
      </div>
    </section>

    <footer className="cta">
      <h2>Learn More About Express.js</h2>
      <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer" className="btn">
        Visit Express.js Official Website
      </a>
    </footer>
  </div>
);

export default ExpressPage;
