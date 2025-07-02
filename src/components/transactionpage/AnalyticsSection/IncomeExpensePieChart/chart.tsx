import { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

import type { TransactionSummary } from '@/types';
import type { Formatter as LegendFormatter } from 'recharts/types/component/DefaultLegendContent';
import type { Formatter as TooltipFormatter } from 'recharts/types/component/DefaultTooltipContent';

interface ChartProps {
  data: TransactionSummary;
}

const Chart = ({ data }: ChartProps) => {
  const pieData = useMemo(() => {
    const total = data.totalIncome + data.totalExpense;

    return [
      {
        name: 'Income',
        value: data.totalIncome,
        percentage:
          total > 0 ? ((data.totalIncome / total) * 100).toFixed(1) : '0',
        color: '#10b981',
      },
      {
        name: 'Expense',
        value: data.totalExpense,
        percentage:
          total > 0 ? ((data.totalExpense / total) * 100).toFixed(1) : '0',
        color: '#ef4444',
      },
    ];
  }, [data]);

  const formatTooltip: TooltipFormatter<number, string> = (
    value,
    name,
    props,
  ) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

    return [`${formattedValue} (${props.payload.percentage}%)`, name];
  };

  const formatLegend: LegendFormatter = (value, entry) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(entry.payload?.value || 0);

    return `${value}: ${formattedValue}`;
  };

  if (data.totalIncome === 0 && data.totalExpense === 0) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={pieData}
            dataKey="value"
            fill="#8884d8"
            label={({ name, percentage }) => `${name}: ${percentage}%`}
            labelLine={false}
            outerRadius={80}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            formatter={formatTooltip}
            labelStyle={{ color: '#374151', fontWeight: 'bold' }}
          />
          <Legend
            formatter={formatLegend}
            height={36}
            verticalAlign="bottom"
            wrapperStyle={{
              paddingTop: '20px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
