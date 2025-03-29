import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TipsSection from '../components/TipsSection';
import SearchSection from '../components/SearchSection';
import { useLocation } from 'react-router-dom';
import exampleData from '../../data/data.json';

const KnowledgePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const KnowledgeBasePage = () => {
  const location = useLocation();
  const [filteredData, setFilteredData] = useState(exampleData.knowledgeBase);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleFilterChange = (filters) => {
    const filtered = exampleData.knowledgeBase.filter(item => {
      return (
        (!filters.age || item.tags.ageGroup?.some(age => age.includes(filters.age))) &&
        (!filters.topic || item.tags.topic?.some(topic => topic.includes(filters.topic)))
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