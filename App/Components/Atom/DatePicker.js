import {memo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../Styles/Atom/DatePickerStyle';
import {apply} from '@Themes/OsmiProvider';
import {getDate} from '@Lib/TextUtils';

const DatePicker = (props) => {
  const {value, setValue, datePickerProps, placeholder} = props;
  const [isVisible, setIsVisible] = useState(false);

  const handleConfirm = useCallback((date) => {
    setIsVisible(false);
    setValue(date);
  }, []);

  const handleCancel = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      <Pressable onPress={() => setIsVisible(true)} style={styles.container}>
        <Text
          style={[styles.text, apply(value ? 'text-black' : 'text-gray-3')]}>
          {value ? getDate(value) : placeholder}
        </Text>
        <Icon name="calendar-month-outline" size={24} color={apply('gray-4')} />
      </Pressable>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        {...datePickerProps}
      />
    </>
  );
};

// Prop type warnings
DatePicker.propTypes = {
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  datePickerProps: PropTypes.object,
  placeholder: PropTypes.string,
};

// Defaults for props
DatePicker.defaultProps = {
  placeholder: 'Tanggal Pengeluaran',
};

export default memo(DatePicker);
