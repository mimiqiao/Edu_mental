import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// Notion API配置
const NOTION_DATABASE_ID = '6719c7650fd1406c92287f556520fbc3';
const NOTION_VERSION = '2022-06-28';

// 爬取数据的主函数
async function crawlNotionData() {
  try {
    console.log('开始获取Notion数据...');
    
    // 使用Notion API获取数据
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page_size: 100,
        sorts: [{
          property: 'title',
          direction: 'ascending'
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Notion API请求失败: ${response.status}`);
    }

    const result = await response.json();
    
    // 处理数据
    const data = result.results.map(page => ({
      title: page.properties.title?.title[0]?.plain_text || '',
      tags: page.properties.tags?.multi_select?.map(tag => tag.name) || [],
      content: page.properties.content?.rich_text[0]?.plain_text || ''
    }));

    // 保存数据到JSON文件
    const outputPath = path.join(process.cwd(), 'data');
    await fs.mkdir(outputPath, { recursive: true });
    await fs.writeFile(
      path.join(outputPath, 'notion_data.json'),
      JSON.stringify(data, null, 2),
      'utf-8'
    );
    
    console.log('数据已保存到:', path.join(outputPath, 'notion_data.json'));
    
    // 关闭浏览器
    await browser.close();
    
    return data;
  } catch (error) {
    console.error('爬取过程中出现错误：', error);
    throw error;
  }
}

// 执行爬虫
crawlNotionData();