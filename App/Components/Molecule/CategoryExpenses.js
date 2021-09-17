import {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {formatMoney} from '@Lib/TextUtils';
import {Category} from '..';

// Styles
import styles from '../Styles/Molecule/CategoryExpensesStyle';
import {apply} from '@Themes/OsmiProvider';

const CategoryExpenses = (props) => {
  const {style, item} = props;

  const getNominal = useCallback(() => {
    return item
      ?.map((obj) => obj?.nominal)
      ?.reduce((a, b) => Number(a) + Number(b));
  }, [item]);

  return (
    <View style={[styles.container, style]}>
      <Category id={item[0]?.category?.id} />
      <Text style={styles.category} numberOfLines={1}>
        {item[0]?.category?.title}
      </Text>
      <Text style={styles.price} numberOfLines={1}>
        Rp{formatMoney(getNominal())}
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
