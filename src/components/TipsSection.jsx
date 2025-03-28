import React from 'react';
import styled from 'styled-components';
import { Card, Tag, Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const TipsContainer = styled.div`
  margin: 40px 0;
  padding: 24px;
  background: #fff;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const TipsCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.default};
  background: #fff9f9;
  
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

const TipsTitle = styled(Title)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 16px !important;
`;

const TipsSection = ({ knowledgeItems }) => {
  return (
    <TipsContainer>
      <TipsTitle level={3}>心理锦囊</TipsTitle>
      <Row gutter={[24, 24]}>
        {knowledgeItems.map(item => (
          <Col xs={24} sm={24} md={12} lg={8} key={item.id}>
            <TipsCard>
              <Title level={4}>{item.title}</Title>
              <Paragraph>
                <strong>定义：</strong>{item.definition}
              </Paragraph>
              <Paragraph>
                <strong>建议：</strong>{item.suggestion}
              </Paragraph>
              <div>
                {item.tags.ageGroup.map(tag => (
                  <StyledTag key={tag} color="blue">{tag}</StyledTag>
                ))}
                {item.tags.topic.map(tag => (
                  <StyledTag key={tag} color="green">{tag}</StyledTag>
                ))}
              </div>
            </TipsCard>
          </Col>
        ))}
      </Row>
    </TipsContainer>
  );
};

export default TipsSection;