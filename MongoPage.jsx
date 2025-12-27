// src/pages/MongoDBPage.js
import React from "react";
import "../styles/MongoDBPage.css";

const MongoDBPage = () => (
  <div className="mongodb-page">
    <header className="hero">
      <h1 className="hero-title">MongoDB</h1>
      <p className="hero-subtitle">
        A powerful, flexible NoSQL database for modern applications.
      </p>
    </header>

    <section className="intro">
      <h2>What is MongoDB?</h2>
      <p>
        MongoDB is a leading NoSQL database known for its scalability, flexibility, and performance. Unlike traditional SQL databases, MongoDB stores data in flexible, JSON-like documents, making it ideal for handling unstructured data and big data applications. It's widely used in modern web development for its ability to scale horizontally, providing high availability and fault tolerance.
      </p>
    </section>

    <section className="features">
      <h2>Core Features of MongoDB</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>Flexible Schema</h3>
          <p>MongoDB uses a flexible schema for its collections. This allows for easy changes in data structure without affecting other data, making it ideal for rapid application development.</p>
        </div>
        <div className="feature-card">
          <h3>Scalability</h3>
          <p>MongoDB is designed to scale horizontally, meaning it can handle large volumes of data across many machines. It uses sharding, which helps distribute data evenly across a cluster.</p>
        </div>
        <div className="feature-card">
          <h3>High Availability</h3>
          <p>MongoDB offers automatic failover and replication, ensuring high availability and fault tolerance in case of server failure.</p>
        </div>
        <div className="feature-card">
          <h3>Aggregation Framework</h3>
          <p>MongoDB's aggregation framework allows for efficient querying and manipulation of data, making complex data analysis easy with features like filtering, sorting, and joining.</p>
        </div>
        <div className="feature-card">
          <h3>Real-Time Analytics</h3>
          <p>MongoDB supports real-time analytics by providing fast querying, indexing, and aggregation capabilities to process large amounts of data quickly.</p>
        </div>
      </div>
    </section>

    <section className="benefits">
      <h2>Why Choose MongoDB?</h2>
      <div className="benefit-grid">
        <div className="benefit-card">
          <h3>High Flexibility</h3>
          <p>MongoDB’s document-based model allows for easy modification of data structures, making it perfect for projects that evolve over time or involve complex, unstructured data.</p>
        </div>
        <div className="benefit-card">
          <h3>Fast Development</h3>
          <p>With a flexible schema and rich query capabilities, MongoDB helps developers build applications faster, reducing time-to-market.</p>
        </div>
        <div className="benefit-card">
          <h3>Easy Scaling</h3>
          <p>MongoDB's ability to scale horizontally across multiple nodes means your application can grow seamlessly as your business or user base expands.</p>
        </div>
        <div className="benefit-card">
          <h3>Open-Source and Cost-Effective</h3>
          <p>MongoDB is free to use under the Server Side Public License (SSPL), and you can deploy it on-premise or in the cloud without any additional costs for scaling.</p>
        </div>
      </div>
    </section>

    <section className="use-cases">
      <h2>Use Cases of MongoDB</h2>
      <div className="use-case-grid">
        <div className="use-case-card">
          <h3>Content Management Systems</h3>
          <p>MongoDB’s flexible schema is ideal for content management systems (CMS) where the structure of the data may change frequently as content evolves.</p>
        </div>
        <div className="use-case-card">
          <h3>Real-Time Analytics</h3>
          <p>With the aggregation framework and fast read and write operations, MongoDB is an excellent choice for real-time analytics applications.</p>
        </div>
        <div className="use-case-card">
          <h3>Mobile and Web Applications</h3>
          <p>MongoDB’s scalability and document-based model make it an ideal backend database for mobile and web applications where the data model is often dynamic.</p>
        </div>
        <div className="use-case-card">
          <h3>Internet of Things (IoT)</h3>
          <p>MongoDB's ability to store massive amounts of unstructured data from IoT devices makes it the go-to database for IoT applications.</p>
        </div>
      </div>
    </section>

    <section className="performance">
      <h2>Performance and Scalability</h2>
      <p>
        MongoDB provides high performance for both reads and writes due to its memory-mapped storage engine. It handles large datasets efficiently by distributing data across multiple nodes in a sharded cluster. By enabling horizontal scaling, MongoDB allows businesses to scale their infrastructure as demand increases without worrying about performance degradation.
      </p>
      <p>
        MongoDB’s native support for replication ensures that data is synchronized across multiple nodes. In case of a failure, the system automatically fails over to a replica, ensuring the continuity of operations. This makes MongoDB an ideal solution for mission-critical applications requiring high availability.
      </p>
    </section>

    <footer className="cta">
      <h2>Learn More About MongoDB</h2>
      <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="btn">
        Visit MongoDB Official Website
      </a>
    </footer>
  </div>
);

export default MongoDBPage;
