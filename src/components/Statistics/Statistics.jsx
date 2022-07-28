import PropTypes from 'prop-types';
import { Container, AccentColor } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Container>
    <ul>
      <li>
        Good: <AccentColor>{good}</AccentColor>
      </li>
      <li>
        Netral: <AccentColor>{neutral}</AccentColor>
      </li>
      <li>
        Bad: <AccentColor>{bad}</AccentColor>
      </li>
      <li>
        Total: <AccentColor>{total}</AccentColor>
      </li>
      <li>
        Positive Feedback: <AccentColor>{positivePercentage}%</AccentColor>
      </li>
    </ul>
  </Container>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
