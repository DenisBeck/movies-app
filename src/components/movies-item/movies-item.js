import { useRef, useState } from 'react';
import { Flex, Typography, Rate } from 'antd';

import { useData } from '../../helpers/data-context-provider';

import './movies-item.css';

const { Title, Paragraph, Text } = Typography;

function MoviesItem({ onAddRating, data }) {
  const { genres, ratings } = useData();
  const [rating, setRating] = useState(ratings[data.id]);

  const textRef = useRef(null);

  const getColor = (rate) => {
    if (rate <= 3) {
      return '#E90000';
    }
    if (rate <= 5) {
      return '#E97E00';
    }
    if (rate <= 7) {
      return '#E9D100';
    }
    return '#66E900';
  };

  const changeRating = (value) => {
    setRating(value);
    onAddRating(value, data.id);
  };

  return (
    <li className="movies-item">
      <div className="movies-item-images">
        <img src={data.image} alt={data.title} />
      </div>
      <Flex vertical gap={10} className="movies-item-info">
        <Title level={4} className="movies-item-title">
          {data.title}
        </Title>
        <Text type="secondary" className="movies-item-date">
          {data.date}
        </Text>
        <ul className="movies-item-genres-list">
          {data.genres.map((item) => {
            const genre = genres.find((genreItem) => String(genreItem.id) === String(item)).name;
            return (
              <Text type="code" key={genre} className="movies-item-genre">
                {genre}
              </Text>
            );
          })}
        </ul>
      </Flex>
      <Flex vertical gap={10} className="movies-item-content">
        <Paragraph
          ref={textRef}
          className="movies-item-description"
          ellipsis={{
            rows: 5,
            expandable: 'collapsible',
          }}
        >
          {data.overview}
        </Paragraph>
        <Rate className="movies-rating" count={10} onChange={changeRating} value={rating} />
      </Flex>
      <div className="movies-rating-value" style={{ borderColor: rating ? getColor(rating) : '#ddd' }}>
        {rating || 0}
      </div>
    </li>
  );
}

export default MoviesItem;
