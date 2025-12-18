Custom AI Dashboard MVP

A high-performance dashboard for monitoring AI systems, built with Next.js, Recharts, and Firebase.

Key Components

Real-time Stat Cards: Visualizing throughput, latency, and data metrics.

Dynamic Charts: Interactive visualization of token consumption and system response times.

Log Viewer: Structured table for auditing AI model outputs and statuses.

Firebase Auth: Ready-to-use email/password authentication.

Installation

Install dependencies: npm install

Set up Firebase: Create a project at console.firebase.google.com and add your keys to .env.local.

Run locally: npm run dev

Deployment

Deployed via Vercel for high availability. Ensure all NEXT_PUBLIC_ Firebase environment variables are mirrored in your Vercel project settings.