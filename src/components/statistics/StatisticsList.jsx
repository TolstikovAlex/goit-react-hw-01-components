import { StatisticsListItem } from './StatisticsListItem';

export const StatisticsList = ({ data }) => {
  return (
    <ul class="stat-list">
      {data.map(elem => (
        <li className="item">
          <StatisticsListItem />
        </li>
      ))}
    </ul>
  );
};
