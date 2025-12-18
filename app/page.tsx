import { TokenUsageChart, LatencyChart } from '@/components/AnalyticsChart'; import { Activity, Cpu, Database, Zap } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, delta }: any) => (

<div className="bg-white p-6 rounded-xl shadow-sm border"> <div className="flex items-center justify-between mb-2"> <Icon className="w-5 h-5 text-blue-600" /> <span className={text-xs font-medium ${delta.startsWith(&#39;+&#39;) ? &#39;text-green-600&#39; : &#39;text-red-600&#39;}}> {delta} </span> </div> <p className="text-sm text-gray-500">{title}</p> <p className="text-2xl font-bold text-gray-900">{value}</p> </div> );

export default function Dashboard() { return ( <main className="min-h-screen bg-gray-50 p-8"> <header className="mb-8"> <h1 className="text-2xl font-bold text-gray-900">AI System Insights</h1> <p className="text-gray-500">Real-time monitoring and model performance analytics.</p> </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard title="Total Requests" value="1.2M" icon={Zap} delta="+12.5%" />
    <StatCard title="Avg Latency" value="450ms" icon={Activity} delta="-5.2%" />
    <StatCard title="Active Models" value="12" icon={Cpu} delta="0%" />
    <StatCard title="Data Processed" value="85GB" icon={Database} delta="+22.4%" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <TokenUsageChart />
    <LatencyChart />
  </div>

  <section className="mt-8 bg-white rounded-xl shadow-sm border overflow-hidden">
    <div className="p-6 border-b">
      <h3 className="font-bold">Recent AI Logs</h3>
    </div>
    <table className="w-full text-left">
      <thead className="bg-gray-50 text-xs uppercase text-gray-500">
        <tr>
          <th className="px-6 py-3">Timestamp</th>
          <th className="px-6 py-3">Model</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Result</th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y">
        <tr>
          <td className="px-6 py-4">2025-12-18 21:05:12</td>
          <td className="px-6 py-4 font-mono">gpt-4-turbo</td>
          <td className="px-6 py-4 text-green-600">SUCCESS</td>
          <td className="px-6 py-4">Sentiment analysis complete...</td>
        </tr>
      </tbody>
    </table>
  </section>
</main>


); }