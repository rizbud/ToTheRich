import {memo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {SectionList, Text} from 'react-native';
import {DailyExpenses} from '..';
import GroupByTime from 'group-by-time';

// Styles
import styles from '../Styles/Organism/DailyExpensesListStyle';
import {apply} from '@Themes/OsmiProvider';
import {dateFormat} from '@Lib/TextUtils';

const DATA = [
  {
    title: 'Hari ini',
    data: [1, 2, 3],
  },
  {
    title: 'Kemarin',
    data: [1, 2],
  },
];

const DailyExpensesList = (props) => {
  const {data} = props;
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const grouped = GroupByTime(data, 'date', 'day');
    const sortedGroup = Object.keys(grouped)?.sort()?.reverse();
    const groupedArray = sortedGroup?.map((item) => ({
      title: Number(item),
      data: grouped[item],
    }));
    setSections(groupedArray);
  }, [data]);

  return (
    <SectionList
      {...props}
      showsVerticalScrollIndicator={false}
      sections={sections}
      keyExtractor={(_, index) => String(index)}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{dateFormat(title)}</Text>
      )}
      renderItem={({item}) => <DailyExpenses item={item} />}
      contentContainerStyle={apply('py-4')}
      style={apply('full')}
    />
  );
};

// Prop type warnings
DailyExpensesList.propTypes = {
  data: PropTypes.array,
};

export default memo(DailyExpensesList);
