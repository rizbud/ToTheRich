import {memo} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {
  Education,
  Entertainment,
  Food,
  Gift,
  Home,
  Internet,
  Shop,
  Sport,
  Transport,
} from '@Images';

// Styles
import styles from '../Styles/Atom/CategoryStyle';
import {apply} from '@Themes/OsmiProvider';

const Category = (props) => {
  const {id, size = 36} = props;

  const getIcon = (props) => {
    switch (id) {
      case 1:
        return <Food {...props} />;
      case 2:
        return <Internet {...props} />;
      case 3:
        return <Education {...props} />;
      case 4:
        return <Gift {...props} />;
      case 5:
        return <Transport {...props} />;
      case 6:
        return <Shop {...props} />;
      case 7:
        return <Home {...props} />;
      case 8:
        return <Sport {...props} />;
      case 9:
        return <Entertainment {...props} />;
      default:
        return null;
    }
  };

  const getColor = () => {
    switch (id) {
      case 1:
        return 'bg-yellow';
      case 2:
        return 'bg-blue-3';
      case 3:
        return 'bg-orange';
      case 4:
        return 'bg-red';
      case 5:
        return 'bg-purple';
      case 6:
        return 'bg-green';
      case 7:
        return 'bg-purple-2';
      case 8:
        return 'bg-blue-2';
      case 9:
        return 'bg-blue-4';
      default:
        return '';
    }
  };

  return (
    <View
      style={[
        styles.container,
        apply(getColor()),
        apply(`w-${size} h-${size}`),
      ]}>
      {getIcon({width: size * 0.7, height: size * 0.7})}
    </View>
  );
};

// Prop type warnings
Category.propTypes = {
  id: PropTypes.number,
  size: PropTypes.number,
};

export default memo(Category);
