import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Tag, Typography, Row, Col, Modal } from 'antd';

// 图片路径
const affiliateProgram = '/images/Notioly-Free-Pack/SVG/Affiliate-Program.svg';
const jumping = '/images/Notioly-Free-Pack/SVG/Jumping.svg';
const painting = '/images/Notioly-Free-Pack/SVG/Painting.svg';
const planningTrip = '/images/Notioly-Free-Pack/SVG/Planning-A-Trip.svg';
const valentinesDay = '/images/Notioly-Free-Pack/SVG/Valentine\'s-Day.svg';
const summerCollection1 = '/images/Notioly-Free-Pack/SVG/Summer-Collection n.1.svg';
const peace = '/images/Notioly-Free-Pack/SVG/Peace.svg';

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

const TipsTitle = styled(Title)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 16px !important;
`;

const TipsSection = ({ knowledgeItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getIllustration = (id) => {
    switch(id) {
      case 'kb001': return affiliateProgram;
      case 'kb002': return jumping;
      case 'kb003': return painting;
      case 'kb004': return planningTrip;
      case 'kb005': return valentinesDay;
      case 'kb006': return summerCollection1;
      case 'kb007': return peace;
      default: return affiliateProgram;
    }
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <TipsContainer>
      <TipsTitle level={3}>心理锦囊</TipsTitle>
      <Row gutter={[24, 24]}>
        {knowledgeItems.map(item => (
          <Col xs={24} sm={24} md={12} lg={8} key={item.id}>
            <TipsCard onClick={() => handleCardClick(item)}>
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
            </TipsCard>
          </Col>
        ))}

      </Row>
      <Modal
        title={selectedItem?.title}
        open={selectedItem !== null}
        onCancel={handleModalClose}
        footer={null}
        width={600}
        centered
      >
        {selectedItem && (
          <div>
            <Paragraph>
              <strong>定义：</strong>{selectedItem.definition}
            </Paragraph>
            <IllustrationWrapper>
              <img src={getIllustration(selectedItem.id)} alt={selectedItem.title} />
            </IllustrationWrapper>
            <Paragraph>
              <strong>教育建议：</strong>{selectedItem.suggestion}
            </Paragraph>
            <div style={{ marginTop: '16px' }}>
              {selectedItem.tags.topic.map(tag => (
                <StyledTag key={tag} color="green">{tag}</StyledTag>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </TipsContainer>
  );
};

export default TipsSection;