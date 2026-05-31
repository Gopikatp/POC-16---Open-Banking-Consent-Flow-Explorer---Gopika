import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ConsentFlowDiagram() {
  const flowSteps = [
    {
      title: "Customer",
      description: "Controls Data Access",
      tooltip:
        "The account holder who grants access.",
    },
    {
      title: "Consent Granted",
      description: "Permission Approved",
      tooltip:
        "Permission is approved by the customer.",
    },
    {
      title: "Bank",
      description: "Stores Financial Data",
      tooltip:
        "Institution that stores financial data.",
    },
    {
      title: "Aggregator",
      description:
        "Processes Consent Requests",
      tooltip:
        "Service that manages consent and data sharing.",
    },
    {
      title: "Third Party App",
      description:
        "Consumes Authorized Data",
      tooltip:
        "Application consuming authorized banking data.",
    },
  ];

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">
        Open Banking Consent Flow
      </h2>

      <div className="flex flex-col items-center gap-3">
        {flowSteps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center cursor-help">
                    <h3 className="font-semibold">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  {step.tooltip}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {index <
              flowSteps.length - 1 && (
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