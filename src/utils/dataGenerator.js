/**
 * Data Generator for Data Visualization Components
 * Provides realistic data for different business scenarios
 */

// Enterprise KPI Data
export const generateKPIData = () => ({
  revenue: {
    current: 1247000,
    target: 1500000,
    growth: 12.5,
    trend: 'up'
  },
  customers: {
    current: 3521,
    target: 4000,
    growth: 8.7,
    trend: 'up'
  },
  conversion: {
    current: 3.2,
    target: 4.0,
    growth: -2.1,
    trend: 'down'
  },
  satisfaction: {
    current: 4.6,
    target: 4.8,
    growth: 5.2,
    trend: 'up'
  }
});

// Financial Trading Data
export const generateStockData = () => {
  const basePrice = 150;
  const points = [];
  let currentPrice = basePrice;

  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.5) * 8;
    currentPrice += change;
    points.push({
      time: `Day ${i + 1}`,
      price: Math.max(100, currentPrice),
      volume: Math.floor(Math.random() * 1000000) + 500000,
      change: change
    });
  }

  return points;
};

// Portfolio Distribution Data
export const generatePortfolioData = () => ([
  { name: 'Technology', value: 35, color: '#3B82F6' },
  { name: 'Healthcare', value: 25, color: '#10B981' },
  { name: 'Finance', value: 20, color: '#8B5CF6' },
  { name: 'Energy', value: 12, color: '#F59E0B' },
  { name: 'Real Estate', value: 8, color: '#EF4444' }
]);

// Analytics Traffic Data
export const generateTrafficData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map((month, index) => ({
    month,
    visitors: 20000 + Math.floor(Math.random() * 15000) + (index * 2000),
    pageViews: 45000 + Math.floor(Math.random() * 25000) + (index * 4000),
    bounceRate: 35 + Math.floor(Math.random() * 20),
    sessionDuration: 180 + Math.floor(Math.random() * 120)
  }));
};

// User Funnel Data
export const generateFunnelData = () => ([
  { stage: 'Visitors', count: 10000, percentage: 100, color: '#3B82F6' },
  { stage: 'Sign-ups', count: 2500, percentage: 25, color: '#10B981' },
  { stage: 'Active Users', count: 1800, percentage: 18, color: '#F59E0B' },
  { stage: 'Purchases', count: 450, percentage: 4.5, color: '#EF4444' },
  { stage: 'Repeat Buyers', count: 180, percentage: 1.8, color: '#8B5CF6' }
]);

// Real-time System Metrics
export const generateSystemMetrics = () => ({
  cpu: {
    usage: Math.floor(Math.random() * 30) + 40,
    cores: 8,
    temperature: Math.floor(Math.random() * 10) + 65
  },
  memory: {
    used: Math.floor(Math.random() * 20) + 60,
    total: 32,
    available: Math.floor(Math.random() * 15) + 25
  },
  network: {
    incoming: Math.floor(Math.random() * 500) + 200,
    outgoing: Math.floor(Math.random() * 300) + 150,
    latency: Math.floor(Math.random() * 20) + 15
  },
  storage: {
    used: Math.floor(Math.random() * 10) + 75,
    total: 2048,
    iops: Math.floor(Math.random() * 1000) + 2000
  }
});

// Sales Team Performance Data
export const generateTeamData = () => [
  {
    name: 'Sarah Chen',
    avatar: '👩‍💼',
    target: 50000,
    achieved: 62000,
    percentage: 124,
    deals: 15,
    rank: 1
  },
  {
    name: 'Michael Rodriguez',
    avatar: '👨‍💼',
    target: 45000,
    achieved: 51000,
    percentage: 113,
    deals: 12,
    rank: 2
  },
  {
    name: 'Emma Thompson',
    avatar: '👩‍💻',
    target: 55000,
    achieved: 59000,
    percentage: 107,
    deals: 18,
    rank: 3
  },
  {
    name: 'David Kim',
    avatar: '👨‍💻',
    target: 40000,
    achieved: 38500,
    percentage: 96,
    deals: 9,
    rank: 4
  }
];

// Geographic Sales Distribution
export const generateGeoData = () => [
  { region: 'North America', sales: 450000, growth: 12.5, color: '#3B82F6' },
  { region: 'Europe', sales: 380000, growth: 8.7, color: '#10B981' },
  { region: 'Asia Pacific', sales: 290000, growth: 22.3, color: '#F59E0B' },
  { region: 'Latin America', sales: 120000, growth: 15.1, color: '#EF4444' },
  { region: 'Middle East & Africa', sales: 85000, growth: 6.8, color: '#8B5CF6' }
];

// Dynamic Time Series Data Generator
export const generateTimeSeriesData = (days = 7, baseValue = 100) => {
  const data = [];
  let current = baseValue;

  for (let i = 0; i < days * 24; i++) {
    const hour = i % 24;
    const dayOffset = Math.floor(i / 24);

    // Add realistic patterns (higher during business hours)
    let multiplier = 1;
    if (hour >= 9 && hour <= 17) {
      multiplier = 1.5;
    } else if (hour >= 6 && hour <= 9) {
      multiplier = 1.2;
    } else if (hour >= 18 && hour <= 22) {
      multiplier = 1.1;
    } else {
      multiplier = 0.6;
    }

    const variation = (Math.random() - 0.5) * 20;
    current = Math.max(10, baseValue * multiplier + variation);

    data.push({
      timestamp: new Date(Date.now() - (days - dayOffset) * 24 * 60 * 60 * 1000 + hour * 60 * 60 * 1000),
      value: Math.round(current * 100) / 100,
      hour: hour,
      day: dayOffset
    });
  }

  return data;
};

// Table Data Generator
export const generateTableData = (scenario = 'enterprise') => {
  const scenarios = {
    enterprise: () => Array.from({ length: 50 }, (_, i) => ({
      id: `EMP-${1000 + i}`,
      name: ['John Smith', 'Sarah Johnson', 'Michael Brown', 'Emily Davis', 'David Wilson'][i % 5],
      department: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'][i % 5],
      role: ['Senior Developer', 'Account Manager', 'Product Manager', 'Analyst', 'Director'][i % 5],
      salary: 60000 + Math.floor(Math.random() * 80000),
      performance: Math.floor(Math.random() * 40) + 60,
      joinDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
      status: ['Active', 'On Leave', 'Remote'][Math.floor(Math.random() * 3)]
    })),

    financial: () => Array.from({ length: 30 }, (_, i) => ({
      symbol: ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX'][i % 8],
      price: 100 + Math.random() * 200,
      change: (Math.random() - 0.5) * 20,
      volume: Math.floor(Math.random() * 10000000),
      marketCap: Math.floor(Math.random() * 2000) + 500,
      peRatio: Math.floor(Math.random() * 50) + 10,
      sector: ['Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer'][i % 5]
    })),

    analytics: () => Array.from({ length: 40 }, (_, i) => ({
      page: [`/home`, `/products`, `/about`, `/contact`, `/blog/${i}`][i % 5],
      views: Math.floor(Math.random() * 10000) + 1000,
      uniqueUsers: Math.floor(Math.random() * 5000) + 500,
      bounceRate: Math.floor(Math.random() * 50) + 20,
      avgTime: Math.floor(Math.random() * 300) + 60,
      conversions: Math.floor(Math.random() * 100),
      revenue: Math.floor(Math.random() * 5000),
      device: ['Desktop', 'Mobile', 'Tablet'][Math.floor(Math.random() * 3)]
    }))
  };

  return scenarios[scenario] ? scenarios[scenario]() : scenarios.enterprise();
};

// Animated Data Updater
export const createDataUpdater = (initialData, updateFrequency = 2000) => {
  let currentData = [...initialData];
  let intervalId = null;
  let subscribers = [];

  const subscribe = (callback) => {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(sub => sub !== callback);
    };
  };

  const notify = () => {
    subscribers.forEach(callback => callback(currentData));
  };

  const start = () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
      // Update data with realistic changes
      currentData = currentData.map(item => {
        if (item.value !== undefined) {
          const change = (Math.random() - 0.5) * (item.value * 0.1);
          return {
            ...item,
            value: Math.max(0, item.value + change),
            trend: change > 0 ? 'up' : 'down'
          };
        }
        return item;
      });

      notify();
    }, updateFrequency);
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const reset = (newData) => {
    currentData = [...newData];
    notify();
  };

  return {
    subscribe,
    start,
    stop,
    reset,
    getCurrentData: () => currentData
  };
};

// Utility Functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatNumber = (num, decimals = 0) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
};

export const formatPercentage = (num, decimals = 1) => {
  return `${(num).toFixed(decimals)}%`;
};

export const getRandomColor = () => {
  const colors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};