import React, { useState } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { Modal, Typography, Button, Tag } from 'antd';
import { theme } from '../styles/theme';
import { getIllustration } from '../components/TipsSection';
import ageGroups from '../data/milestonesData';
import exampleData from '../../data/data.json';

const { Paragraph } = Typography;

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

const TipTag = styled.div`
  padding: 6px 10px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.secondaryDark};
    color: #0348C2;
    border-color: ${props => props.theme.primary};
  }
`;

const GrowthMapPage = () => {
  const getMilestoneDescription = (milestone) => {
    if (!milestone) return '';
    
    // 从年龄组数据中查找匹配的里程碑描述
    const ageGroup = ageGroups.find(age => 
      age.milestones.includes(milestone)
    );
    
    if (ageGroup?.descriptions?.[milestone]) {
      return ageGroup.descriptions[milestone];
    }
    
    return '';
  };
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const svgRef = React.useRef(null);

  React.useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    
    const width = 800;
    const height = 800;
    const innerRadius = 150;
    const outerRadius = Math.min(width, height) / 2 - 20;
    






    // 创建角度比例尺
    const x = d3.scaleBand()
      .domain(ageGroups.map(age => age.name))
      .range([0, 2 * Math.PI])
      .align(0);

    // 创建径向比例尺
    const y = d3.scaleRadial()
      .domain([0, d3.max(ageGroups, d => d.milestones.length)])
      .range([innerRadius, outerRadius]);

    // 创建颜色比例尺 - 按层级分类
    const color = d3.scaleOrdinal()
      .domain(d3.range(d3.max(ageGroups, d => d.milestones.length)))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.7 + 0.15), d3.max(ageGroups, d => d.milestones.length)))
      .unknown('#ccc');

    // 设置SVG尺寸
    svg.attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height]);

    // 绘制径向条形图
    ageGroups.forEach(age => {
      const angle = x(age.name) + x.bandwidth() / 2;
      
      age.milestones.forEach((milestone, i) => {
        const barHeight = y(1) - y(0);
        const innerRadius = y(i);
        const outerRadius = y(i + 1);
        
        svg.append('path')
          .attr('d', d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(angle - x.bandwidth() * 0.4)
            .endAngle(angle + x.bandwidth() * 0.4)
          )
          .attr('fill', color(i))
          .attr('stroke', theme.background)
          .attr('stroke-width', 1)
          .attr('opacity', 0.7)
          .attr('fill-opacity', 0.9)
          // 鼠标悬停事件处理
          .on('mouseover', () => {
            // 如果不是固定状态，则显示当前里程碑内容
            if (!isFixed) {
              handleAgeSelect(age); // 设置当前年龄段
              setSelectedMilestone(milestone); // 设置当前里程碑
            }
          })
          // 鼠标移出事件处理
          .on('mouseout', () => {
            // 如果不是固定状态且没有选中里程碑，则清空显示
            if (!isFixed && !selectedMilestone) {
              setSelectedMilestone(null);
            }
          })
          // 点击事件处理（有两个相同的点击事件，可以删除一个）
          .on('click', () => {
            handleAgeSelect(age); // 设置当前年龄段
            handleMilestoneSelect(milestone); // 设置当前里程碑
            setIsFixed(true); // 设置为固定状态，保持显示
          })
      });
    });

    // 添加年龄段标签
    svg.append('g')
      .attr('text-anchor', 'middle')
      .selectAll('g')
      .data(ageGroups)
      .join('g')
      .attr('transform', d => `
        rotate(${((x(d.name) + x.bandwidth() / 2) * 180 / Math.PI - 90)})
        translate(${innerRadius - 30},0)
      `)
      .call(g => g.append('text')
        .attr('transform', d => (x(d.name) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI
          ? 'rotate(90)translate(0,16)'
          : 'rotate(-90)translate(0,-9)')
        .text(d => d.name)
        .attr('fill', theme.text)
        .attr('font-size', '14px'));

    // 添加中心标题
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .text('儿童心理发展')
      .attr('fill', theme.primary)
      .attr('font-weight', 'bold')
      .attr('font-size', '18px');
  }, [selectedAge, selectedMilestone]);
  


  // 处理年龄段选择
  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setSelectedMilestone(null);
  };

  // 处理里程碑选择
  const handleMilestoneSelect = (milestone) => {
    setSelectedMilestone(milestone);
    setIsFixed(true);
    setShowCloseButton(true);
    setClickPosition({ x: 0, y: 0 }); // 重置点击位置
  };
  
  // 关闭知识卡片
  const handleCloseCard = () => {
    setSelectedMilestone(null);
    setIsFixed(false);
    setShowCloseButton(false);
  };

  // 渲染成长树
  const renderGrowthTree = () => {
    return (
      <div className="growth-tree">
        {ageGroups.map((ageGroup) => (
          <div 
            key={ageGroup.id} 
            className={`age-group ${selectedAge?.id === ageGroup.id ? 'selected' : ''}`}
            onClick={() => handleAgeSelect(ageGroup)}
          >
            <h3>{ageGroup.name}</h3>
            <div className="milestones">
              {ageGroup.milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`milestone ${selectedMilestone === milestone ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMilestoneSelect(milestone);
                  }}
                >
                  {milestone}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 渲染知识卡片
  const renderKnowledgeCard = () => {
    if (!selectedMilestone) return null;
    
    // 获取当前年龄组的锦囊数据
    const currentAgeGroup = ageGroups.find(age => 
      age.milestones.includes(selectedMilestone)
    );
    
    // 获取当前里程碑的锦囊ID
    const tipIds = currentAgeGroup?.tips?.[selectedMilestone] || [];
    
    // 从知识库中获取锦囊内容
    const getTipContent = (tipId) => {
      // 从data.json中获取锦囊内容
      const knowledgeItem = exampleData.knowledgeBase.find(item => item.id === tipId);
      return knowledgeItem || {
        title: `${tipId.replace('kb', '')}`,
        definition: `这是${tipId}的定义内容`,
        detail: `这是${tipId}的详细说明`
      };
    };
    
    return (
      <div className="knowledge-card" style={{
        position: 'fixed',
        top: '120px',
        right: '20px',
        zIndex: 1000,
        padding: '15px',
        background: theme.cardBackground,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '300px',
        pointerEvents: 'auto',
        transition: 'all 0.1s ease-out',
        opacity: isFixed ? 1 : 0.9,
        display: selectedMilestone ? 'block' : 'none'
      }}>
        {showCloseButton && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCloseCard();
            }}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'transparent',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
              color: theme.text
            }}
          >
            ×
          </button>
        )}
        <h3 style={{ color: theme.primary, marginBottom: '10px' }}>{selectedMilestone}</h3>
        <p style={{ color: theme.text }}>{getMilestoneDescription(selectedMilestone)}</p>
        {tipIds.length > 0 && (
          <div style={{ marginTop: '15px' }}>
            <h4 style={{ color: theme.primary, marginBottom: '8px' }}>相关锦囊</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              

{tipIds.map(tipId => (
  <TipTag 
    key={tipId}
    onClick={() => {
      const tipContent = getTipContent(tipId);
      setSelectedItem(tipContent);
    }}
  >
     {tipId.replace('kb', '')}
  </TipTag>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="growth-map-container" style={{ background: theme.background, padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: theme.primary, textAlign: 'center', marginBottom: '30px' }}>儿童心理成长地图</h2>
      {renderKnowledgeCard()}
      {selectedItem && (
        <Modal
          title={selectedItem.title}
          open={selectedItem !== null}
          onCancel={() => setSelectedItem(null)}
          footer={null}
          width={600}
          centered
        >
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
              {selectedItem.tags?.topic?.map(tag => (
                <StyledTag key={tag} color="green">{tag}</StyledTag>
              ))}
            </div>
          </div>
        </Modal>
      )}
      <div className="growth-map-content">
        <svg 
          ref={svgRef} 
          width="800" 
          height="800"
          viewBox="-400 -400 800 800"
          style={{ 
            marginBottom: '20px', 
            display: 'block', 
            margin: '0 auto',
            background: theme.background
          }}
        />
      </div>
    </div>
  );
};

export default GrowthMapPage;