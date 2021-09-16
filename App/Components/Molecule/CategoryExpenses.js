import {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {formatMoney} from '@Lib/TextUtils';
import {Category} from '..';

// Styles
import styles from '../Styles/Molecule/CategoryExpensesStyle';
import {apply} from '@Themes/OsmiProvider';

const CategoryExpenses = (props) => {
  const {style, item} = props;

  return (
    <View style={[styles.container, style]}>
      <Category id={1} />
      <Text style={styles.category} numberOfLines={1}>
        Makanan
      </Text>
      <Text style={styles.price} numberOfLines={1}>
        Rp{formatMoney(5000000)}
      </Text>
    </View>
  );
};

// Prop type warnings
CategoryExpenses.propTypes = {
  style: PropTypes.any,
  item: PropTypes.object,
};

export default memo(CategoryExpenses);
