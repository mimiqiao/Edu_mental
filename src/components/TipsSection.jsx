import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Tag, Typography, Row, Col, Modal, Button } from 'antd';

// 图片路径
const affiliateProgram = '/images/Notioly-Free-Pack/SVG/Affiliate-Program.svg';
const jumping = '/images/Notioly-Free-Pack/SVG/Jumping.svg';
const painting = '/images/Notioly-Free-Pack/SVG/Painting.svg';
const planningTrip = '/images/Notioly-Free-Pack/SVG/Planning-A-Trip.svg';
const valentinesDay = '/images/Notioly-Free-Pack/SVG/Valentine\'s-Day.svg';
const summerCollection1 = '/images/Notioly-Free-Pack/SVG/Summer-Collection n.1.svg';
const peace = '/images/Notioly-Free-Pack/SVG/Peace.svg';

export const getIllustration = (id) => {
  switch(id) {
    case 'kb001': return affiliateProgram;
    case 'kb002': return jumping;
    case 'kb003': return painting;
    case 'kb004': return planningTrip;
    case 'kb005': return valentinesDay;
    case 'kb007': return peace;
    case 'kb006': return '/images/Notioly-Free-Pack/PNG/329_Package_Tracking_png.png';
    case 'kb008': return '/images/Notioly-Free-Pack/PNG/410_Best_Friends_png.png';
    case 'kb009': return '/images/Notioly-Free-Pack/PNG/312_New_Idea_png.png';
    case 'kb010': return '/images/Notioly-Free-Pack/PNG/Caring.png';
    case 'kb011': return '/images/Notioly-Free-Pack/PNG/301_Compass_png.png';
    case 'kb012': return '/images/Notioly-Free-Pack/PNG/334_Give_Me_Five_png.png';
    case 'kb013': return '/images/Notioly-Free-Pack/PNG/484_Riding_The_Bicycle_png.png';
    case 'kb014': return '/images/Notioly-Free-Pack/PNG/321_Design_Tools_png.png';
    case 'kb015': return '/images/Notioly-Free-Pack/PNG/Throwing_Away.png';
    case 'kb016': return '/images/Notioly-Free-Pack/PNG/326_Building_Blocks_png.png';
    case 'kb017': return '/images/Notioly-Free-Pack/PNG/327_Library_png.png';
    case 'kb018': return '/images/Notioly-Free-Pack/PNG/328_Cup_Of_Coffee_png.png';
    case 'kb019': return '/images/Notioly-Free-Pack/PNG/Growth.png';
    case 'kb020': return '/images/Notioly-Free-Pack/PNG/332_Equilibrium_png.png';
    case 'kb021': return '/images/Notioly-Free-Pack/PNG/335_Level_Of_Satisfaction_png.png';
    case 'kb022': return '/images/Notioly-Free-Pack/PNG/Personal_Growth.png';
    case 'kb023': return '/images/Notioly-Free-Pack/PNG/Take_Care.png';
    case 'kb024': return '/images/Notioly-Free-Pack/PNG/322_Peace__png.png';
    case 'kb025': return '/images/Notioly-Free-Pack/PNG/Calendar.png';
    case 'kb026': return '/images/Notioly-Free-Pack/PNG/Baking.png';
    case 'kb027': return '/images/Notioly-Free-Pack/PNG/Besties.png';
    case 'kb028': return '/images/Notioly-Free-Pack/PNG/Hiring.png';
    case 'kb029': return '/images/Notioly-Free-Pack/PNG/Architect.png';
    case 'kb030': return '/images/Notioly-Free-Pack/PNG/Nosy_People.png';
    case 'kb031': return '/images/Notioly-Free-Pack/PNG/331_Swing_Set_png.png';
    case 'kb032': return '/images/Notioly-Free-Pack/PNG/Education.png';
    case 'kb033': return '/images/Notioly-Free-Pack/PNG/333_Inspection_png.png';
    case 'kb034': return '/images/Notioly-Free-Pack/PNG/Sending.png';
    case 'kb035': return '/images/Notioly-Free-Pack/PNG/372_Selfie_png.png';
    case 'kb036': return '/images/Notioly-Free-Pack/PNG/315_Knowledge_Base_png.png';
    case 'kb037': return '/images/Notioly-Free-Pack/PNG/354_Pros_And_Cons_png.png';
    case 'kb038': return '/images/Notioly-Free-Pack/PNG/352_Slot_Machine_png.png';
    default: return affiliateProgram;
  }
};

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

const TipsSection = ({ knowledgeItems, showAll = false }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(18);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100 ||
        isLoading ||
        visibleItems >= knowledgeItems.length
      ) {
        return;
      }
      
      setIsLoading(true);
      setTimeout(() => {
        setVisibleItems(prev => prev + 12);
        setIsLoading(false);
      }, 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, visibleItems, knowledgeItems.length]);

  

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
        {knowledgeItems.slice(0, visibleItems).map(item => (
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
      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Button type="text" loading>加载中...</Button>
        </div>
      )}
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