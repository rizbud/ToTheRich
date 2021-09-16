import {memo} from 'react';
// import PropTypes from 'prop-types'
import {SectionList, View, Text} from 'react-native';
import {DailyExpenses} from '..';

// Styles
import styles from '../Styles/Organism/DailyExpensesListStyle';
import {apply} from '@Themes/OsmiProvider';

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
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(_, index) => String(index)}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
      renderItem={({item}) => <DailyExpenses item={item} />}
      contentContainerStyle={apply('px-4')}
      style={apply('full')}
    />
  );
};

// // Prop type warnings
// DailyExpensesList.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// DailyExpensesList.defaultProps = {
//   someSetting: false
// }

export default memo(DailyExpensesList);
