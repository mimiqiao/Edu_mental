import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Slider, Input, Calendar, Button } from 'antd';
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import EmotionTrend from '../components/EmotionTrend';
import { useLocation } from 'react-router-dom';

const EmotionContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    10% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
    20% { transform: translate(-50%, -50%) scale(1); }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const EmotionIcon = styled.div`
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 16px;
  border-radius: 8px;
  animation: slideIn 0.5s ease-out;
  &:hover {
    background: #f0f0f0;
    transform: scale(1.1);
  }
  &.selected {
    background: #e6f7ff;
    color: #1890ff;
    animation: bounce 1s infinite;
  }
`;

const EmotionCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  animation: slideIn 0.5s ease-out;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const EmotionDiaryPage = () => {
  const location = useLocation();
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [intensity, setIntensity] = useState(5);
  const [note, setNote] = useState('');
  const [emotionData, setEmotionData] = useState([]);
  const [showReward, setShowReward] = useState(false);
  const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // 模拟历史情绪数据
    const mockData = [
      { date: new Date('2025-01-01'), emotion: '开心', intensity: 8 },
      { date: new Date('2025-02-02'), emotion: '平静', intensity: 5 },
      { date: new Date('2025-03-03'), emotion: '难过', intensity: 3 },
      { date: new Date('2025-03-09'), emotion: '开心', intensity: 7 },
      { date: new Date('2025-03-22'), emotion: '平静', intensity: 6 }
    ];
    setEmotionData(mockData);
  }, []);

  const emotions = [
    { icon: <SmileOutlined />, label: '开心', value: 'happy' },
    { icon: <MehOutlined />, label: '平静', value: 'neutral' },
    { icon: <FrownOutlined />, label: '难过', value: 'sad' },
  ];

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
    // 添加选择情绪时的动画效果
    const element = document.getElementById(`emotion-${emotion}`);
    element.style.transform = 'scale(1.2)';
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 200);
  };

  const handleCalendarSelect = (date) => {
    console.log('选择的日期:', date.format('YYYY-MM-DD'));
  };

  const handleSaveEmotion = () => {
    if (!selectedEmotion) return;
    
    const newEmotion = {
      date: new Date(),
      emotion: emotions.find(e => e.value === selectedEmotion)?.label,
      intensity
    };

    setEmotionData([...emotionData, newEmotion]);
    setStreakCount(prev => prev + 1);
    setShowReward(true);

    // 3秒后隐藏奖励动画
    setTimeout(() => setShowReward(false), 3000);

    // 重置表单
    setSelectedEmotion(null);
    setIntensity(5);
    setNote('');
  };

  return (
    <EmotionContainer>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>今日心情日记</h1>
      
      <Row gutter={24}>
        <Col span={16}>
          <EmotionCard title="选择今天的心情">
            <Row justify="space-around">
              {emotions.map((emotion) => (
                <Col key={emotion.value}>
                  <EmotionIcon
                    id={`emotion-${emotion.value}`}
                    className={selectedEmotion === emotion.value ? 'selected' : ''}
                    onClick={() => handleEmotionSelect(emotion.value)}
                  >
                    {emotion.icon}
                    <div style={{ fontSize: 14, marginTop: 8 }}>{emotion.label}</div>
                  </EmotionIcon>
                </Col>
              ))}
            </Row>
          </EmotionCard>

          <EmotionCard title="情绪强度">
            <Slider
              min={1}
              max={10}
              value={intensity}
              onChange={setIntensity}
              marks={{
                1: '轻微',
                5: '中等',
                10: '强烈'
              }}
            />
          </EmotionCard>

          <EmotionCard title="记录一下发生了什么">
            <Input.TextArea
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="写下今天的心情故事..."
            />
            <Button 
              type="primary" 
              style={{ marginTop: 16 }} 
              onClick={handleSaveEmotion}
              disabled={!selectedEmotion}
            >
              保存今日心情
            </Button>
            {showReward && (
              <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                textAlign: 'center',
                animation: 'fadeInOut 3s ease-in-out'
              }}>
                <h2>🎉 太棒了！</h2>
                <p>你已经连续记录{streakCount}天啦</p>
                <p>坚持记录心情，更了解孩子的内心世界</p>
              </div>
            )}
          </EmotionCard>
        </Col>

        <Col span={8}>
          <EmotionCard title="心情日历">
            <Calendar
              fullscreen={false}
              onSelect={handleCalendarSelect}
            />
          </EmotionCard>
        </Col>
      </Row>

      <EmotionCard title="情绪趋势分析">
        <EmotionTrend data={emotionData} />
      </EmotionCard>
    </EmotionContainer>
  );
};

export default EmotionDiaryPage;