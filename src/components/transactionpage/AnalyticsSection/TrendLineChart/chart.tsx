import dayjs from 'dayjs';
import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import type { Transaction } from '@/types';

interface TrendLineChartProps {
  data: Transaction[];
}

const TrendLineChart = ({ data }: TrendLineChartProps) => {
  const processedData = useMemo(() => {
    const groupedByDate = new Map<
      string,
      { income: number; expense: number }
    >();

    data.forEach((transaction) => {
      const dateKey = dayjs(transaction.date).format('YYYY-MM-DD');
      const current = groupedByDate.get(dateKey) || { income: 0, expense: 0 };

      if (transaction.type === 'income') {
        current.income += transaction.amount;
      } else {
        current.expense += transaction.amount;
      }

      groupedByDate.set(dateKey, current);
    });

    const sortedData = Array.from(groupedByDate.entries())
      .map(([dateKey, totals]) => ({
        date: dayjs(dateKey).format('MMM DD'),
        income: totals.income,
        expense: totals.expense,
        balance: totals.income - totals.expense,
      }))
      .sort(
        (a, b) =>
          dayjs(a.date, 'MMM DD').valueOf() - dayjs(b.date, 'MMM DD').valueOf(),
      );

    return sortedData;
  }, [data]);

  if (!processedData.length) {
    return null;
  }

  const formatTooltip = (value: number, name: string) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

    return [formattedValue, name.charAt(0).toUpperCase() + name.slice(1)];
  };

  const formatYAxis = (tickItem: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(tickItem);
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={processedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
          <XAxis
            axisLine={false}
            dataKey="date"
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
            height={36}
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: '10px',
            }}
          />
          <Line
            activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
            dataKey="income"
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            name="Income"
            stroke="#10b981"
            strokeWidth={2}
            type="monotone"
          />
          <Line
            activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
            dataKey="expense"
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            name="Expense"
            stroke="#ef4444"
            strokeWidth={2}
            type="monotone"
          />
          <Line
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            dataKey="balance"
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            name="Balance"
            stroke="#3b82f6"
            strokeWidth={2}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendLineChart;
