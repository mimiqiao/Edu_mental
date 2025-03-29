import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { theme, mixins } from './styles/theme/index';
import App from './App';
import './index.css';

// 配置 Antd 主题
const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
    colorSuccess: theme.colors.success,
    colorWarning: theme.colors.warning,
    colorError: theme.colors.error,
    colorTextBase: theme.colors.text,
    borderRadius: parseInt(theme.borderRadius.medium),
    fontFamily: theme.fonts.primary,
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={{ ...theme, mixins }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>,
);