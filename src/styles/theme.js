// 定义全局主题配置
export const theme = {
  colors: {
    primary: '#FF9F8C', // 温暖的珊瑚色
    secondary: '#FFD6CC', // 柔和的粉色
    accent: '#FFC107', // 明亮的金色，用于强调
    background: '#FFF9F5', // 温暖的米色背景
    text: '#4A4A4A', // 柔和的深灰色文字
    border: '#FFE4DC', // 温暖的边框色
    success: '#8BC34A', // 清新的绿色
    warning: '#FFB74D', // 温暖的橙色
    error: '#FF7043', // 柔和的红色
  },
  fonts: {
    primary: '"PingFang SC", "Microsoft YaHei", sans-serif',
  },
  shadows: {
    small: '0 2px 8px rgba(255, 159, 140, 0.1)',
    medium: '0 4px 12px rgba(255, 159, 140, 0.15)',
    large: '0 8px 24px rgba(255, 159, 140, 0.2)',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    circle: '50%',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.45s ease-in-out',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
};

// 全局样式混入
export const mixins = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  cardStyle: `
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(255, 159, 140, 0.15);
    padding: 24px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(255, 159, 140, 0.2);
    }
  `,
  scrollbar: `
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #FFF9F5;
    }
    &::-webkit-scrollbar-thumb {
      background: #FFD6CC;
      border-radius: 3px;
    }
  `,
};