import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Typography } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { Text } = Typography;

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 24px;
  padding: 16px;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledInput = styled(Input.TextArea)`
  flex: 1;
  border-radius: ${props => props.theme.borderRadius.medium};
  min-height: 60px;
`;

const QAPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      // 这里可以添加AI回复的逻辑
    }
  };

  return (
    <PageContainer>
      <Text strong style={{ fontSize: '24px', marginBottom: '24px' }}>
        智能问答助手
      </Text>
      
      <ChatContainer>
        {messages.length === 0 ? (
          <Text type="secondary" style={{ textAlign: 'center', marginTop: '40%' }}>
            请输入您的问题，我将尽力为您解答
          </Text>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={{ 
              marginBottom: '16px',
              textAlign: msg.sender === 'user' ? 'right' : 'left'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '12px',
                background: msg.sender === 'user' ? '#1890ff' : '#f0f0f0',
                color: msg.sender === 'user' ? 'white' : 'inherit'
              }}>
                {msg.text}
              </div>
            </div>
          ))
        )}
      </ChatContainer>
      
      <InputContainer>
        <StyledInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="请输入您的问题..."
          autoSize={{ minRows: 2, maxRows: 6 }}
          onPressEnter={(e) => {
            if (!e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button 
          type="primary" 
          icon={<SendOutlined />} 
          onClick={handleSend}
          style={{ borderRadius: '12px', height: 'auto', width: '80px' }}
        />
      </InputContainer>
    </PageContainer>
  );
};

export default QAPage;