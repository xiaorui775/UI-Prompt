/**
 * Chart Utils for Data Visualization Components
 * Pure SVG/CSS implementations for lightweight charts
 */

// SVG Path Generators
export const createLineChart = (data, width = 300, height = 200, options = {}) => {
  const {
    strokeColor = '#3B82F6',
    strokeWidth = 2,
    fillGradient = false,
    showDots = false,
    animate = true
  } = options;

  if (!data || data.length === 0) return '';

  const maxValue = Math.max(...data.map(d => d.value || d.y || 0));
  const minValue = Math.min(...data.map(d => d.value || d.y || 0));
  const range = maxValue - minValue || 1;

  // eslint-disable-next-line no-unused-vars
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((point.value || point.y || 0) - minValue) / range * height;
    return `${x},${y}`;
  }).join(' ');

  const pathData = data.map((point, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((point.value || point.y || 0) - minValue) / range * height;
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  let svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      ${fillGradient ? `
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${strokeColor};stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:${strokeColor};stop-opacity:0" />
          </linearGradient>
        </defs>
        <path d="${pathData} L ${width} ${height} L 0 ${height} Z" fill="url(#lineGradient)" />
      ` : ''}
      <path
        d="${pathData}"
        stroke="${strokeColor}"
        stroke-width="${strokeWidth}"
        fill="none"
        ${animate ? 'class="animate-line-draw"' : ''}
      />
      ${showDots ? data.map((point, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((point.value || point.y || 0) - minValue) / range * height;
        return `<circle cx="${x}" cy="${y}" r="3" fill="${strokeColor}" />`;
      }).join('') : ''}
    </svg>
  `;

  return svg;
};

export const createBarChart = (data, width = 300, height = 200, options = {}) => {
  const {
    barColor = '#3B82F6',
    barSpacing = 4,
    animate = true,
    showValues = false
  } = options;

  if (!data || data.length === 0) return '';

  const maxValue = Math.max(...data.map(d => d.value || d.y || 0));
  const barWidth = (width - (data.length - 1) * barSpacing) / data.length;

  const bars = data.map((item, index) => {
    const barHeight = (item.value || item.y || 0) / maxValue * height;
    const x = index * (barWidth + barSpacing);
    const y = height - barHeight;

    return `
      <rect
        x="${x}"
        y="${y}"
        width="${barWidth}"
        height="${barHeight}"
        fill="${item.color || barColor}"
        rx="2"
        ${animate ? 'class="animate-bar-grow"' : ''}
      />
      ${showValues ? `
        <text
          x="${x + barWidth / 2}"
          y="${y - 5}"
          text-anchor="middle"
          font-size="12"
          fill="#374151"
        >
          ${item.value || item.y || 0}
        </text>
      ` : ''}
    `;
  }).join('');

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      ${bars}
    </svg>
  `;
};

export const createPieChart = (data, radius = 100, options = {}) => {
  const {
    showLabels = true,
    showPercentages = true,
    // eslint-disable-next-line no-unused-vars
    innerRadius = 0,
    animate = true
  } = options;

  if (!data || data.length === 0) return '';

  const total = data.reduce((sum, item) => sum + (item.value || 0), 0);
  const centerX = radius + 20;
  const centerY = radius + 20;
  let currentAngle = -90; // Start from top

  const slices = data.map((item, index) => {
    const percentage = (item.value || 0) / total;
    const angleSpan = percentage * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angleSpan;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const largeArcFlag = angleSpan > 180 ? 1 : 0;

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    // Calculate label position
    const labelAngle = (startAngle + endAngle) / 2;
    const labelAngleRad = (labelAngle * Math.PI) / 180;
    const labelRadius = radius * 0.7;
    const labelX = centerX + labelRadius * Math.cos(labelAngleRad);
    const labelY = centerY + labelRadius * Math.sin(labelAngleRad);

    currentAngle += angleSpan;

    return {
      path: pathData,
      color: item.color || `hsl(${index * 360 / data.length}, 70%, 60%)`,
      label: item.name || item.label || '',
      percentage: (percentage * 100).toFixed(1),
      labelX,
      labelY,
      animate: animate ? 'animate-pie-slice' : ''
    };
  });

  const svgSize = (radius + 20) * 2;

  return `
    <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" xmlns="http://www.w3.org/2000/svg">
      ${slices.map(slice => `
        <path
          d="${slice.path}"
          fill="${slice.color}"
          ${slice.animate ? `class="${slice.animate}"` : ''}
          style="transform-origin: ${centerX}px ${centerY}px;"
        />
      `).join('')}
      ${showLabels ? slices.map(slice => `
        <text
          x="${slice.labelX}"
          y="${slice.labelY}"
          text-anchor="middle"
          font-size="12"
          fill="white"
          font-weight="bold"
        >
          ${showPercentages ? slice.percentage + '%' : slice.label}
        </text>
      `).join('') : ''}
    </svg>
  `;
};

export const createProgressBar = (value, max = 100, options = {}) => {
  const {
    width = 200,
    height = 8,
    backgroundColor = '#E5E7EB',
    progressColor = '#3B82F6',
    animate = true,
    showPercentage = true,
    rounded = true
  } = options;

  const percentage = Math.min((value / max) * 100, 100);
  const progressWidth = (percentage / 100) * width;

  return `
    <div class="flex items-center space-x-3">
      <svg width="${width}" height="${height}" class="overflow-visible">
        <rect
          width="${width}"
          height="${height}"
          fill="${backgroundColor}"
          ${rounded ? `rx="${height / 2}"` : ''}
        />
        <rect
          width="${progressWidth}"
          height="${height}"
          fill="${progressColor}"
          ${rounded ? `rx="${height / 2}"` : ''}
          ${animate ? 'class="transition-all duration-1000 ease-out"' : ''}
        />
      </svg>
      ${showPercentage ? `
        <span class="text-sm font-medium text-gray-600">${percentage.toFixed(1)}%</span>
      ` : ''}
    </div>
  `;
};

export const createSparkline = (data, width = 100, height = 30, color = '#3B82F6') => {
  if (!data || data.length === 0) return '';

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;

  const pathData = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - minValue) / range) * height;
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" class="inline-block">
      <path
        d="${pathData}"
        stroke="${color}"
        stroke-width="1.5"
        fill="none"
        class="animate-line-draw"
      />
    </svg>
  `;
};

export const createGaugeChart = (value, max = 100, options = {}) => {
  const {
    size = 120,
    strokeWidth = 8,
    backgroundColor = '#E5E7EB',
    progressColor = '#3B82F6',
    showValue = true
  } = options;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(value / max, 1);
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - percentage);

  return `
    <div class="relative inline-flex items-center justify-center">
      <svg width="${size}" height="${size}" class="transform -rotate-90">
        <circle
          cx="${size / 2}"
          cy="${size / 2}"
          r="${radius}"
          stroke="${backgroundColor}"
          stroke-width="${strokeWidth}"
          fill="transparent"
        />
        <circle
          cx="${size / 2}"
          cy="${size / 2}"
          r="${radius}"
          stroke="${progressColor}"
          stroke-width="${strokeWidth}"
          fill="transparent"
          stroke-dasharray="${strokeDasharray}"
          stroke-dashoffset="${strokeDashoffset}"
          stroke-linecap="round"
          class="transition-all duration-1000 ease-out"
        />
      </svg>
      ${showValue ? `
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-lg font-bold text-gray-700">${Math.round(value)}</span>
        </div>
      ` : ''}
    </div>
  `;
};

// Animation CSS Classes (to be added to global CSS)
export const chartAnimationCSS = `
  @keyframes line-draw {
    from {
      stroke-dasharray: 0 1000;
    }
    to {
      stroke-dasharray: 1000 0;
    }
  }

  @keyframes bar-grow {
    from {
      transform: scaleY(0);
      transform-origin: bottom;
    }
    to {
      transform: scaleY(1);
      transform-origin: bottom;
    }
  }

  @keyframes pie-slice {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-line-draw {
    stroke-dasharray: 1000;
    animation: line-draw 1.5s ease-out forwards;
  }

  .animate-bar-grow {
    animation: bar-grow 1s ease-out forwards;
  }

  .animate-pie-slice {
    animation: pie-slice 1s ease-out forwards;
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-stagger {
    animation-delay: calc(var(--stagger-delay, 0) * 0.1s);
  }
`;

// Chart Color Palettes
export const colorPalettes = {
  business: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  tech: ['#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'],
  finance: ['#1E40AF', '#059669', '#D97706', '#DC2626', '#7C3AED'],
  modern: ['#0EA5E9', '#22C55E', '#FACC15', '#F87171', '#A855F7'],
  gradient: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe']
};

// Utility Functions
export const interpolateColor = (color1, color2, factor) => {
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');

  const r1 = parseInt(hex1.substr(0, 2), 16);
  const g1 = parseInt(hex1.substr(2, 2), 16);
  const b1 = parseInt(hex1.substr(4, 2), 16);

  const r2 = parseInt(hex2.substr(0, 2), 16);
  const g2 = parseInt(hex2.substr(2, 2), 16);
  const b2 = parseInt(hex2.substr(4, 2), 16);

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export const getColorFromValue = (value, min, max, palette = colorPalettes.business) => {
  const normalized = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const index = Math.floor(normalized * (palette.length - 1));
  const remainder = (normalized * (palette.length - 1)) % 1;

  if (index === palette.length - 1) return palette[index];

  return interpolateColor(palette[index], palette[index + 1], remainder);
};

export const formatChartData = (data, type = 'line') => {
  switch (type) {
    case 'line':
    case 'bar':
      return data.map((item, index) => ({
        x: index,
        y: item.value || item.y || 0,
        label: item.label || item.name || `Point ${index + 1}`,
        color: item.color
      }));

    case 'pie': {
      const total = data.reduce((sum, item) => sum + (item.value || 0), 0);
      return data.map(item => ({
        ...item,
        percentage: ((item.value || 0) / total) * 100
      }));
    }

    default:
      return data;
  }
};