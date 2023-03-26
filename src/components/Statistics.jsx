import PropTypes from "prop-types";

import {
  Section,
  H2Title,
  UlStatList,
  LiStatItem,
  SpanLabel,
  SpanPercentage,
} from "./Statistic.styled.jsx";

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <H2Title>{title}</H2Title>}

      <UlStatList>
        {stats.map(({ id, label, percentage }) => (
          <LiStatItem key={id}>
            <SpanLabel>{label}</SpanLabel>
            <SpanPercentage>{percentage}%</SpanPercentage>
          </LiStatItem>
        ))}
      </UlStatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
