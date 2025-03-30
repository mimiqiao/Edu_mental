import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const TrendContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
`;

const EmotionTrend = ({ data = [] }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data.length) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // 清除旧的SVG内容
    d3.select(svgRef.current).selectAll('*').remove();

    // 创建SVG
    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // 创建比例尺
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([1, 10])
      .range([height, 0]);

    // 创建线条生成器
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.intensity))
      .curve(d3.curveCatmullRom);

    // 添加X轴
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // 添加Y轴
    svg.append('g')
      .call(d3.axisLeft(y));

    // 添加网格线
    svg.append('g')
      .attr('class', 'grid')
      .attr('opacity', 0.1)
      .call(d3.axisLeft(y)
        .tickSize(-width)
        .tickFormat('')
      );

    // 绘制线条
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#1890ff')
      .attr('stroke-width', 2)
      .attr('d', line)
      .attr('opacity', 0)
      .transition()
      .duration(1000)
      .attr('opacity', 1);

    // 添加点
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.intensity))
      .attr('r', 0)
      .attr('fill', '#1890ff')
      .transition()
      .duration(1000)
      .attr('r', 5);

    // 添加情绪标签
    svg.selectAll('text.emotion-label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'emotion-label')
      .attr('x', d => x(d.date))
      .attr('y', d => y(d.intensity) - 10)
      .attr('text-anchor', 'middle')
      .attr('opacity', 0)
      .text(d => d.emotion)
      .transition()
      .duration(1000)
      .attr('opacity', 1);

  }, [data]);

  return (
    <TrendContainer>
      <div ref={svgRef}></div>
    </TrendContainer>
  );
};

export default EmotionTrend;