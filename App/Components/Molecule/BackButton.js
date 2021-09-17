import {memo, useCallback} from 'react';
// import PropTypes from 'prop-types'
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '..';
import {useNavigation} from '@react-navigation/native';

// Styles
import styles from '../Styles/Molecule/BackButtonStyle';
import {apply} from '@Themes/OsmiProvider';

const BackButton = (props) => {
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Button onPress={onBack} style={styles.container}>
      <Icon name="chevron-left" size={28} />
    </Button>
  );
};

// // Prop type warnings
// BackButton.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// BackButton.defaultProps = {
//   someSetting: false
// }

export default memo(BackButton);
