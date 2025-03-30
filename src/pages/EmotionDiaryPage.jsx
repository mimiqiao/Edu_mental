import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Slider, Input, Calendar, Button } from 'antd';
import { SmileOutlined, MehOutlined, FrownOutlined, FrownFilled, MehFilled, HeartOutlined, ThunderboltOutlined, CloudOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import EmotionTrend from '../components/EmotionTrend';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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
  const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // 模拟历史情绪数据
    const mockData = [
      { date: new Date('2025-01-01'), emotion: '开心', intensity: 8 },
      { date: new Date('2025-02-02'), emotion: '害怕', intensity: 5 },
      { date: new Date('2025-03-03'), emotion: '难过', intensity: 3 },
      { date: new Date('2025-03-09'), emotion: '开心', intensity: 7 },
      { date: new Date('2025-03-22'), emotion: '兴奋', intensity: 6 }
    ];
    setEmotionData(mockData);
  }, []);

  const emotions = [
    { icon: <SmileOutlined style={{ color: '#faad14' }} />, label: '开心', value: 'happy' },
    { icon: <FrownFilled style={{ color: '#ff4d4f' }} />, label: '生气', value: 'angry' },
    { icon: <CloudOutlined style={{ color: '#722ed1' }} />, label: '害怕', value: 'scared' },
    { icon: <FrownOutlined style={{ color: '#1890ff' }} />, label: '伤心', value: 'sad' },
    { icon: <HeartOutlined style={{ color: '#fa541c' }} />, label: '兴奋', value: 'excited' },
    { icon: <MehFilled style={{ color: '#8c8c8c' }} />, label: '无聊', value: 'bored' },
    { icon: <ThunderboltOutlined style={{ color: '#52c41a' }} />, label: '惊讶', value: 'surprised' },
    { icon: <MehOutlined style={{ color: '#eb2f96' }} />, label: '害羞', value: 'shy' },
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

  const [aiAdvice, setAiAdvice] = useState('');
  const [showAdvice, setShowAdvice] = useState(false);

  const handleSaveEmotion = async () => {
    if (!selectedEmotion) return;
    
    const newEmotion = {
      date: new Date(),
      emotion: emotions.find(e => e.value === selectedEmotion)?.label,
      intensity
    };

    setEmotionData([...emotionData, newEmotion]);
    setStreakCount(prev => prev + 1);

    setShowAdvice(true);
    setAiAdvice('正在获取AI建议...');

    try {
      const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 6ac483a68a8641e29c97730546d0974d.Oy9Y2fBOqCnW8jVw',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'glm-4',
          messages: [{
            role: 'user',
            content: `我的孩子今天情绪是${emotions.find(e => e.value === selectedEmotion)?.label}，强度为${intensity}/10。${note ? '具体情况是：' + note : ''}请给出专业的儿童心理建议。`
          }],
          stream: true
        })
      });

      if (!response.ok) throw new Error('API请求失败');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.replace('data: ', '');
            if (data === '[DONE]') continue;
            
            try {
              const parsed = JSON.parse(data);
              if (parsed.choices?.[0]?.delta?.content) {
                fullResponse += parsed.choices[0].delta.content;
                setAiAdvice(fullResponse);
              }
            } catch (e) {
              console.error('解析错误:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('获取AI建议失败:', error);
      setAiAdvice('获取AI建议失败，请稍后再试');
    }



    // 重置表单
    setSelectedEmotion(null);
    setIntensity(5);
    setNote('');
  };

  return (
    <EmotionContainer>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>今日情绪观察日记</h1>
      
      <Row gutter={24}>
        <Col span={16}>
          <EmotionCard title="选择孩子今天的情绪">
            <Row gutter={[16, 16]} justify="start">
              {emotions.map((emotion) => (
                <Col key={emotion.value} xs={12} sm={6} md={3}>
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
              placeholder="记录孩子今天的情绪"
            />
            <Button 
              type="primary" 
              style={{ marginTop: 16 }} 
              onClick={handleSaveEmotion}
              disabled={!selectedEmotion}
            >
              保存今日情绪
            </Button>
            
            {showAdvice && (
              <div style={{ 
                marginTop: 24,
                padding: 16,
                background: '#f6ffed',
                border: '1px solid #b7eb8f',
                borderRadius: 8
              }}>
                <h3 style={{ color: '#389e0d', marginBottom: 12 }}>👩‍⚕️ 心理学家建议</h3>
                <ReactMarkdown components={{ol: ({node, ...props}) => <ol style={{paddingLeft: '24px'}} {...props} />,ul: ({node, ...props}) => <ul style={{paddingLeft: '24px'}} {...props} />}} style={{ margin: 0 }}>{aiAdvice}</ReactMarkdown>
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