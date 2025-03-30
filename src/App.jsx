import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Card, Tag, Typography, Space, Button } from 'antd';
import { HeartOutlined, BookOutlined, TeamOutlined, SmileOutlined, CopyrightOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchSection from './components/SearchSection';
import exampleData from '../data/data.json';
import TipsSection from './components/TipsSection';
import { Link, Routes, Route } from 'react-router-dom';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import GrowthMapPage from './pages/GrowthMapPage';
import EmotionDiaryPage from './pages/EmotionDiaryPage';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const StyledFooter = styled(Footer)`
  text-align: center;
  padding: 24px;
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  border-top: 1px solid ${props => props.theme.colors.border};

  @keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;

// 自定义组件样式
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const StyledHeader = styled(Header)`
  background: #fff;
  box-shadow: ${props => props.theme.shadows.small};
  padding: 0 50px;
  ${props => props.theme.mixins.flexBetween}
`;

const Logo = styled.div`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  ${props => props.theme.mixins.flexCenter}
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const StyledContent = styled(Content)`
  padding: 24px 50px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const FilterSection = styled.div`
  margin: 24px 0;
  padding: 24px;
  background: #fff;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const KnowledgeCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const StyledTag = styled(Tag)`
  margin: 4px;
  border-radius: 12px;
  padding: 4px 12px;
`;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // 模拟数据
  const menuItems = [
    { key: 'home', icon: <HeartOutlined />, label: <Link to="/">首页</Link> },
    { key: 'knowledge', icon: <BookOutlined />, label: <Link to="/knowledge">锦囊库</Link> },
    { key: 'growth', icon: <TeamOutlined />, label: <Link to="/growth-map">成长地图</Link> },
    { key: 'emotion', icon: <SmileOutlined />, label: <Link to="/emotion-diary">情绪观察</Link> },
  ];
  
  const [current, setCurrent] = useState(location.pathname === '/' ? 'home' : location.pathname.split('/')[1] || 'home');
  
  useEffect(() => {
    const path = location.pathname;
    setCurrent(path === '/' ? 'home' : path.split('/')[1] || 'home');
  }, [location.pathname]);

  const ageOptions = [
    { value: '0-3', label: '0-3岁' },
    { value: '3-6', label: '3-6岁' },
    { value: '6-12', label: '6-12岁' },
  ];

  const topicOptions = [
    { value: 'emotion', label: '情绪管理' },
    { value: 'social', label: '社交能力' },
    { value: 'learning', label: '学习能力' },
  ];

  return (
    <StyledLayout>
      <StyledHeader>
        <Logo>
          <Link to="/">
            <HeartOutlined /> 儿童心理锦囊铺
          </Link>
        </Logo>
        <Menu mode="horizontal" items={menuItems} />
      </StyledHeader>
      
      <StyledContent>
        <Routes>
          <Route path="/" element={
            <>
              <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
                温暖贴心的儿童心理知识平台
              </Title>
              <TipsSection knowledgeItems={exampleData.knowledgeBase.slice(0, 6)} onViewMore={() => navigate('/knowledge')} />

              <div style={{ display: 'flex', gap: '32px', marginTop: '60px', marginBottom: '40px' }}>
                <KnowledgeCard
                  hoverable
                  style={{ flex: 1, minHeight: '280px', padding: '24px' }}
                  onClick={() => navigate('/growth-map')}
                >
                  <Card.Meta
                    avatar={<TeamOutlined style={{ fontSize: '32px', color: '#1890ff' }} />}
                    title={<Title level={3}>成长地图</Title>}
                    description={
                      <Paragraph style={{ fontSize: '16px', marginTop: '16px', lineHeight: '1.8' }}>
                        探索儿童成长的关键里程碑，了解不同年龄段的发展特点和关注重点。根据年龄阶段获取专业的成长指导和建议。
                      </Paragraph>
                    }
                  />
                </KnowledgeCard>

                <KnowledgeCard
                  hoverable
                  style={{ flex: 1, minHeight: '280px', padding: '24px' }}
                  onClick={() => navigate('/emotion-diary')}
                >
                  <Card.Meta
                    avatar={<SmileOutlined style={{ fontSize: '32px', color: '#52c41a' }} />}
                    title={<Title level={3}>情绪观察</Title>}
                    description={
                      <Paragraph style={{ fontSize: '16px', marginTop: '16px', lineHeight: '1.8' }}>
                        记录和追踪孩子的情绪变化，分析情绪模式，获取专业的情绪管理建议。帮助孩子更好地认识和表达自己的情绪。
                      </Paragraph>
                    }
                  />
                </KnowledgeCard>
              </div>
            </>
          } />
          <Route path="/knowledge" element={<KnowledgeBasePage />} />
          <Route path="/growth-map" element={<GrowthMapPage />} />
          <Route path="/emotion-diary" element={<EmotionDiaryPage />} />
        </Routes>
      </StyledContent>
      <StyledFooter>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CopyrightOutlined />
          2025
        </div>
        <HeartFilled style={{ position: 'absolute', top: -14, fontSize: '24px', color: '#ff4d4f', animation: 'heartBeat 1.5s infinite' }} />
      </StyledFooter>
    </StyledLayout>
  );
};

export default App;