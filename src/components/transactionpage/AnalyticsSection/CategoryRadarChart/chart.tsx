import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';

import { getChipColor } from '../../utils';

import type { CategorySpending } from '@/types';

interface ChartProps {
  data: CategorySpending[];
}

const Chart = ({ data }: ChartProps) => {
  const chartData = useMemo(
    () =>
      data.map((item) => ({
        category: item.category,
        amount: item.totalAmount,
      })),
    [data],
  );

  const formatTooltip = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatYAxis = (tick: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(tick);
  };

  if (!chartData.length) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
          <XAxis
            axisLine={false}
            dataKey="category"
            fontSize={12}
            stroke="#6b7280"
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            fontSize={12}
            stroke="#6b7280"
            tickFormatter={formatYAxis}
            tickLine={false}
          />
          <Tooltip formatter={formatTooltip} />
          <Legend />
          <Bar dataKey="amount" name="Amount">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getChipColor(entry.category) as string}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
