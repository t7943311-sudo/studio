import { LineChartExample } from './components/line-chart-example';
import { BarChartExample } from './components/bar-chart-example';
import { PieChartExample } from './components/pie-chart-example';

export default function ChartsPage() {
  return (
    <div className="grid gap-6">
      <LineChartExample />
      <div className="grid gap-6 lg:grid-cols-2">
        <BarChartExample />
        <PieChartExample />
      </div>
    </div>
  );
}
