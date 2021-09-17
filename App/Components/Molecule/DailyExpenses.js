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
      <Category id={item?.category?.id} size={28} />
      <Text style={styles.name}>{item?.name}</Text>
      <Text style={styles.price}>Rp{formatMoney(item?.nominal)}</Text>
    </View>
  );
};

// Prop type warnings
DailyExpenses.propTypes = {
  item: PropTypes.object,
};

export default memo(DailyExpenses);
