"use client"; import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [ { name: 'Mon', tokens: 4000, latency: 240 }, { name: 'Tue', tokens: 3000, latency: 198 }, { name: 'Wed', tokens: 2000, latency: 980 }, { name: 'Thu', tokens: 2780, latency: 390 }, { name: 'Fri', tokens: 1890, latency: 480 }, { name: 'Sat', tokens: 2390, latency: 380 }, { name: 'Sun', tokens: 3490, latency: 430 }, ];

export const TokenUsageChart = () => (

<div className="h-[300px] w-full bg-white p-4 rounded-xl shadow-sm border"> <h3 className="text-sm font-medium text-gray-500 mb-4">Token Usage Over Time</h3> <ResponsiveContainer width="100%" height="100%"> <LineChart data={data}> <CartesianGrid strokeDasharray="3 3" vertical={false} /> <XAxis dataKey="name" axisLine={false} tickLine={false} /> <YAxis axisLine={false} tickLine={false} /> <Tooltip /> <Line type="monotone" dataKey="tokens" stroke="#2563eb" strokeWidth={2} dot={false} /> </LineChart> </ResponsiveContainer> </div> );

export const LatencyChart = () => (

<div className="h-[300px] w-full bg-white p-4 rounded-xl shadow-sm border"> <h3 className="text-sm font-medium text-gray-500 mb-4">Model Latency (ms)</h3> <ResponsiveContainer width="100%" height="100%"> <BarChart data={data}> <XAxis dataKey="name" axisLine={false} tickLine={false} /> <YAxis axisLine={false} tickLine={false} /> <Tooltip /> <Bar dataKey="latency" fill="#8b5cf6" radius={[4, 4, 0, 0]} /> </BarChart> </ResponsiveContainer> </div> );