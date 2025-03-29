import React, { useState } from 'react';
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

const SearchSection = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    age: null,
    topic: null
  });

  const ageOptions = [
    { value: '', label: '全部年龄段' },
    { value: '0-3', label: '0-3岁' },
    { value: '3-6', label: '3-6岁' },
    { value: '6-12', label: '6-12岁' },
  ];

  const topicOptions = [
    { value: '', label: '全部主题' },
    { value: '情绪管理', label: '情绪管理' },
    { value: '社交能力', label: '社交能力' },
    { value: '学习能力', label: '学习能力' },
  ];

  const handleFilterChange = (type, value) => {
    const newFilters = {
      ...filters,
      [type]: value
    };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <FilterSection>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space size="large">
          <Select
            placeholder="选择年龄段"
            options={ageOptions}
            style={{ width: 120 }}
            onChange={(value) => handleFilterChange('age', value)}
          />
          <Select
            placeholder="选择主题"
            options={topicOptions}
            style={{ width: 120 }}
            onChange={(value) => handleFilterChange('topic', value)}
          />
        </Space>
      </Space>
    </FilterSection>
  );
};

export default SearchSection;