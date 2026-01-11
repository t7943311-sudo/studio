import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import { StatCard } from './components/stat-card';
import { SalesChart } from './components/sales-chart';
import { GrowthChart } from './components/growth-chart';
import { RecentSales } from './components/recent-sales';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          description="+20.1% from last month"
        />
        <StatCard
          title="Subscriptions"
          value="+2350"
          icon={Users}
          description="+180.1% from last month"
        />
        <StatCard
          title="Sales"
          value="+12,234"
          icon={CreditCard}
          description="+19% from last month"
        />
        <StatCard
          title="Active Now"
          value="+573"
          icon={Activity}
          description="+201 since last hour"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
         <SalesChart />
         <GrowthChart />
      </div>
      <div>
        <RecentSales />
      </div>
    </div>
  );
}
