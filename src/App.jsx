import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Card, Tag, Typography, Space } from 'antd';
import { HeartOutlined, BookOutlined, TeamOutlined } from '@ant-design/icons';
import SearchSection from './components/SearchSection';
import exampleData from '../data/data.json';
import TipsSection from './components/TipsSection';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

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
  // 模拟数据
  const menuItems = [
    { key: 'home', icon: <HeartOutlined />, label: '首页' },
    { key: 'knowledge', icon: <BookOutlined />, label: '知识库' },
    { key: 'qa', icon: <TeamOutlined />, label: '智能问答' },
  ];

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
          <HeartOutlined /> 儿童心理锦囊铺
        </Logo>
        <Menu mode="horizontal" items={menuItems} />
      </StyledHeader>
      
      <StyledContent>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
          温暖贴心的儿童心理知识平台
        </Title>
        
        <SearchSection />
        
        <TipsSection knowledgeItems={exampleData.knowledgeBase.slice(0, 6)} />

        <div style={{ marginTop: 24 }}>
          <KnowledgeCard>
            <Title level={4}>如何帮助孩子克服分离焦虑？</Title>
            <Space wrap>
              <StyledTag color="pink">3-6岁</StyledTag>
              <StyledTag color="gold">情绪管理</StyledTag>
              <StyledTag color="cyan">入园适应</StyledTag>
            </Space>
            <Paragraph style={{ margin: '16px 0' }}>
              分离焦虑是幼儿园适应期常见的情绪问题。本文将从心理学角度，为家长提供实用的应对策略...
            </Paragraph>
          </KnowledgeCard>

          <KnowledgeCard>
            <Title level={4}>培养孩子的同理心：从小做起的社交课</Title>
            <Space wrap>
              <StyledTag color="pink">0-3岁</StyledTag>
              <StyledTag color="gold">社交能力</StyledTag>
            </Space>
            <Paragraph style={{ margin: '16px 0' }}>
              同理心是社交能力的重要组成部分，良好的同理心有助于孩子建立和维护人际关系...
            </Paragraph>
          </KnowledgeCard>
        </div>
      </StyledContent>
    </StyledLayout>
  );
};

export default App;