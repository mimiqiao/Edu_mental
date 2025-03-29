import React from 'react';
import styled from 'styled-components';
import { Input, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const FilterSection = styled.div`
  margin: 24px 0;
  padding: 24px;
  background: #fff;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const SearchSection = () => {
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
    <>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Input.Search
          placeholder="请输入您关心的儿童心理问题"
          enterButton={<SearchOutlined />}
          size="large"
        />
      </Space>
    </>
  );
};

export default SearchSection;