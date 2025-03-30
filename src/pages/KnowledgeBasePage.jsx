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
      const matchesAge = !filters.age || item.tags.ageGroup?.some(age => age.includes(filters.age));
      const matchesTopic = !filters.topic || item.tags.topic?.some(topic => topic.includes(filters.topic));
      const matchesSearch = !filters.searchText || 
        item.title.includes(filters.searchText) || 
        item.definition.includes(filters.searchText) ||
        item.suggestion.includes(filters.searchText);
      
      return matchesAge && matchesTopic && matchesSearch;
    });
    setFilteredData(filtered);
  };

  return (
    <KnowledgePageContainer>
      <SearchSection onFilterChange={handleFilterChange} />
      <TipsSection 
        knowledgeItems={filteredData} 
        showAll={true}
        onViewMore={null}
      />
    </KnowledgePageContainer>
  );
};

export default KnowledgeBasePage;