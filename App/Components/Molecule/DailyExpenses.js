import {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {Category} from '..';

// Styles
import styles from '../Styles/Molecule/DailyExpensesStyle';
import {apply} from '@Themes/OsmiProvider';
import {formatMoney} from '@Lib/TextUtils';

const DailyExpenses = (props) => {
  const {item} = props;

  return (
    <View style={styles.container}>
      <Category id={1} size={28} />
      <Text style={styles.name}>Food</Text>
      <Text style={styles.price}>Rp{formatMoney(50000)}</Text>
    </View>
  );
};

// Prop type warnings
DailyExpenses.propTypes = {
  item: PropTypes.object,
};

export default memo(DailyExpenses);
