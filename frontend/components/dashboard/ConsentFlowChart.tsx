"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    scope: string;
    count: number;
  }[];
}

export default function ConsentFlowDiagram() {
  const steps = [
    {
      title: "Customer",
      description: "Controls Data Access",
    },
    {
      title: "Consent Granted",
      description: "Permission Approved",
    },
    {
      title: "Bank",
      description: "Stores Financial Data",
    },
    {
      title: "Aggregator",
      description: "Processes Consent Requests",
    },
    {
      title: "Third Party App",
      description: "Consumes Authorized Data",
    },
  ];

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">
        Open Banking Consent Flow
      </h2>

      <div className="flex flex-col items-center gap-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center"
          >
            <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center">
              <h3 className="font-semibold">
                {step.title}
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="text-cyan-400 text-2xl">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}