import { Flex, Typography } from 'antd';

import './movies-item.css';

const { Title, Paragraph, Text } = Typography;

function MoviesItem({ data }) {
  const clipText = (text, maxLength) => {
    if (text.length > maxLength) {
      const newText = text.slice(0, maxLength);
      return `${newText.slice(0, newText.lastIndexOf(' '))} ...`;
    }
    return text;
  };

  return (
    <li className="movies-item">
      <div className="movies-item-images">
        <img src={data.image} alt={data.title} />
      </div>
      <Flex vertical gap="small" className="movies-item-content">
        <Title level={4} className="movies-item-title">
          {data.title}
        </Title>
        <Text type="secondary" class="movies-item-date">
          {data.date}
        </Text>
        <ul className="movies-item-genres-list">
          {data.genres.map((genre) => (
            <Text type="code" key={genre} className="movies-item-genre">
              {genre}
            </Text>
          ))}
        </ul>
        <Paragraph tooltip className="movies-item-description">
          {clipText(data.overview, 150)}
        </Paragraph>
      </Flex>
    </li>
  );
}

export default MoviesItem;
