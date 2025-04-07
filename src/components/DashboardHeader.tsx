
import { Clock, Package, PackageCheck, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
  trend?: number;
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="w-4 h-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {trend && trend > 0 ? (
              <span className="text-green-500 flex items-center text-xs">
                <TrendingUp className="mr-1 h-3 w-3" />
                {trend}% from last month
              </span>
            ) : trend && trend < 0 ? (
              <span className="text-red-500 flex items-center text-xs">
                <TrendingUp className="mr-1 h-3 w-3" />
                {Math.abs(trend)}% from last month
              </span>
            ) : null}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function DashboardHeader() {
  return (
    <div className="space-y-6 my-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Promotions</h1>
        <p className="text-muted-foreground">
          Track and manage all your promotional orders in one place.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StatCard
          title="Active Promotions"
          value="12"
          description="2 ending this week"
          icon={<PackageCheck />}
          trend={8}
        />
        <StatCard
          title="In Preparation"
          value="4"
          description="Average processing time: 3 days"
          icon={<Clock />}
          trend={-3}
        />
        <StatCard
          title="Dispatched"
          value="24"
          description="6 delivered in the last 7 days"
          icon={<Package />}
          trend={15}
        />
        <StatCard
          title="Total Orders"
          value="78"
          description="From the last 12 months"
          icon={<TrendingUp />}
        />
      </div>
    </div>
  );
}
