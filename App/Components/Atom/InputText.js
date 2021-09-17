import {memo} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View} from 'react-native';

// Styles
import styles from '../Styles/Atom/InputTextStyle';
import {apply} from '@Themes/OsmiProvider';

const InputText = (props) => {
  const {prefix, suffix, prefixStyle, suffixStyle, style} = props;

  return (
    <View style={[styles.container, style]}>
      {prefix && <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor={apply('gray-3')}
        {...props}
      />
      {suffix && <Text style={[styles.prefix, suffixStyle]}>{suffix}</Text>}
    </View>
  );
};

// Prop type warnings
InputText.propTypes = {
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  style: PropTypes.any,
  prefixStyle: PropTypes.any,
  suffixStyle: PropTypes.any,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default memo(InputText);
