import {memo} from 'react';
// import PropTypes from 'prop-types'
import {FlatList, View, Text} from 'react-native';
import {CategoryExpenses} from '..';

// Styles
import styles from '../Styles/Organism/CategoryExpensesListStyle';
import {apply} from '@Themes/OsmiProvider';

const CategoryExpensesList = (props) => {
  const {data = [1, 2, 3]} = props;
  return (
    <View style={apply('my-4')}>
      <Text style={styles.title}>Pengeluaran berdasarkan kategori</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={apply('p-2')}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item}) => <CategoryExpenses style={apply('mx-2')} />}
      />
    </View>
  );
};

// // Prop type warnings
// CategoryExpensesList.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// CategoryExpensesList.defaultProps = {
//   someSetting: false
// }

export default memo(CategoryExpensesList);
