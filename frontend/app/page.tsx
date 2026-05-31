import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";

export default function Home() {
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Open Banking Consent Flow Explorer
        </h1>

        <p className="text-slate-400 mb-8">
          Real Rails Intelligence Dashboard
        </p>

        <MetricsCards
          active={3}
          revoked={1}
          expired={1}
        />

        <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Consent Flow Visualization
          </h2>

          <p className="text-slate-400">
            Chart placeholder — Recharts implementation comes next.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}