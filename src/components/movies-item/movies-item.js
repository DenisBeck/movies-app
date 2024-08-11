import { useContext, useState } from 'react';
import { Flex, Typography, Rate } from 'antd';

import './movies-item.css';
import { GenresContext } from '../../helpers/genres-context-provider';

const { Title, Paragraph, Text } = Typography;

function MoviesItem({ onAddRating, data }) {
  const genres = useContext(GenresContext);
  const [rating, setRating] = useState(data.rating);

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

  const clipText = (text, maxLength) => {
    if (text.length > maxLength) {
      const newText = text.slice(0, maxLength);
      return `${newText.slice(0, newText.lastIndexOf(' '))} ...`;
    }
    return text;
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
      <Flex vertical gap="small" className="movies-item-content">
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
        <Paragraph className="movies-item-description">{clipText(data.overview, 150)}</Paragraph>
        <Rate className="movies-rating" count={10} onChange={changeRating} value={rating} />
        <div className="movies-rating-value" style={{ borderColor: rating ? getColor(rating) : '#ddd' }}>
          {rating}
        </div>
      </Flex>
    </li>
  );
}

export default MoviesItem;
