import {memo} from 'react';
import PropTypes from 'prop-types';
import {Pressable, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../Styles/Atom/PressableInputStyle';
import {apply} from '@Themes/OsmiProvider';

const PressableInput = (props) => {
  const {value, placeholder = 'Pilih kategori', onPress, style} = props;

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {value || <Text style={styles.placeholder}>{placeholder}</Text>}
      <View style={styles.circle}>
        <Icon name="chevron-right" size={20} color={apply('gray-3')} />
      </View>
    </Pressable>
  );
};

// Prop type warnings
PressableInput.propTypes = {
  value: PropTypes.element,
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

export default memo(PressableInput);
