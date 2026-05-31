import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sidebar() {
  return (
    <div className="space-y-4">
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          Open Banking enables customers to securely share financial data
          across institutions while maintaining consent control.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Who Controls The Rail</CardTitle>
        </CardHeader>
        <CardContent>
          Banks, regulators, consent providers, and aggregators collectively
          govern access to financial data.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Dashboard Filters</CardTitle>
        </CardHeader>
        <CardContent>
          Bank Filter
          <br />
          Consent Status
          <br />
          Permission Scope
        </CardContent>
      </Card>
    </div>
  );
}