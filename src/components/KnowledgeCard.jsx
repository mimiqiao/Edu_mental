import React from 'react';
import styled from 'styled-components';
import { Card, Tag, Typography } from 'antd';
import { getIllustration } from './TipsSection';

const { Title, Paragraph } = Typography;

const KnowledgeCardWrapper = styled(Card)`
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

const IllustrationWrapper = styled.div`
  margin: 16px 0;
  text-align: center;
  img {
    width: 150px;
    height: auto;
  }
`;

const StyledTag = styled(Tag)`
  margin: 4px;
  border-radius: 12px;
  padding: 4px 12px;
`;

export { IllustrationWrapper, StyledTag };

const KnowledgeCard = ({ item, onClick }) => {
  return (
    <KnowledgeCardWrapper onClick={() => onClick(item)}>
      <Title level={4}>{item.title}</Title>
      <IllustrationWrapper>
        <img src={getIllustration(item.id)} alt={item.title} />
      </IllustrationWrapper>
      <Paragraph>
        <strong>定义：</strong>{item.definition}
      </Paragraph>
      <div>
        {item.tags.topic.map(tag => (
          <StyledTag key={tag} color="green">{tag}</StyledTag>
        ))}
      </div>
    </KnowledgeCardWrapper>
  );
};

export default KnowledgeCard;