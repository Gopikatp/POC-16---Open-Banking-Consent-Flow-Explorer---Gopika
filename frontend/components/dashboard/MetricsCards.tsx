import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricsProps {
  active: number;
  revoked: number;
  expired: number;
}

export default function MetricsCards({
  active,
  revoked,
  expired,
}: MetricsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-4 cursor-help">
              <h3 className="text-slate-400 text-sm">
                Active Consents
              </h3>

              <p className="text-3xl font-bold text-cyan-400">
                {active}
              </p>
            </div>
          </TooltipTrigger>

          <TooltipContent>
            Consents currently authorized and usable.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-4 cursor-help">
              <h3 className="text-slate-400 text-sm">
                Revoked
              </h3>

              <p className="text-3xl font-bold text-red-400">
                {revoked}
              </p>
            </div>
          </TooltipTrigger>

          <TooltipContent>
            Consents manually withdrawn by users.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-4 cursor-help">
              <h3 className="text-slate-400 text-sm">
                Expired
              </h3>

              <p className="text-3xl font-bold text-yellow-400">
                {expired}
              </p>
            </div>
          </TooltipTrigger>

          <TooltipContent>
            Consents no longer valid due to expiry.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}