import React, { useState } from 'react';
import styled from 'styled-components';
import TipsSection from '../components/TipsSection';
import SearchSection from '../components/SearchSection';
import exampleData from '../../data/data.json';

const KnowledgePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const KnowledgeBasePage = () => {
  const [filteredData, setFilteredData] = useState(exampleData.knowledgeBase);

  const handleFilterChange = (filters) => {
    const filtered = exampleData.knowledgeBase.filter(item => {
      return (
        (!filters.age || item.tags.ageGroup.some(age => age === filters.age)) &&
        (!filters.topic || item.tags.topic.includes(filters.topic))
      );
    });
    setFilteredData(filtered);
  };

  return (
    <KnowledgePageContainer>
      <SearchSection onFilterChange={handleFilterChange} />
      <TipsSection 
        knowledgeItems={filteredData} 
        showAll={true}
      />
    </KnowledgePageContainer>
  );
};

export default KnowledgeBasePage;