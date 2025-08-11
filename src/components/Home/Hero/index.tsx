import React from "react";

export default function Hero() {
  return (
    <section className="section-padding hero-gradient">
      <div className="container-default text-center">
        <h1 className="hero-title">
          ConfigForge — guides & templates for Microsoft 365 and Azure
        </h1>
        <p className="hero-subtitle">
          Practical docs, runbooks, and references I use in real projects.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a className="btn btn-primary" href="/docs">
            Browse Docs
          </a>
          <a className="btn btn-outline" href="https://opsora.io">
            Back to Opsora
          </a>
        </div>
      </div>
    </section>
  );
}
