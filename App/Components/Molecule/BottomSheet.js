import {memo, useState, forwardRef, useImperativeHandle, useRef} from 'react';
// import PropTypes from 'prop-types'
import {View, Text, Pressable} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../Styles/Molecule/BottomSheetStyle';
import {apply} from '@Themes/OsmiProvider';

const BottomSheet = forwardRef((props, ref) => {
  const {title, children} = props;
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    show() {
      modalRef?.current?.open();
    },
    hide() {
      modalRef?.current?.close();
    },
  }));

  return (
    <RBSheet
      ref={modalRef}
      height={300}
      customStyles={{
        container: styles.container,
      }}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={() => modalRef?.current?.close()}>
          <Icon name="close" size={24} />
        </Pressable>
      </View>
      {children}
    </RBSheet>
  );
});

// // Prop type warnings
// BottomSheet.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// BottomSheet.defaultProps = {
//   someSetting: false
// }

export default memo(BottomSheet);
