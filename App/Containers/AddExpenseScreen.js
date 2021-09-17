import {useCallback, useState, useRef} from 'react';
import {connect} from 'react-redux';
import ExpensesActions from '@Redux/ExpensesRedux';
import {FlatList, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PushNotification from '@Services/PushNotification';
import {
  InputText,
  PressableInput,
  DatePicker,
  Button,
  BottomSheet,
  Category,
} from '@Components/index';
import CATEGORY from '@Constants/Category';

// Styles
import styles from './Styles/AddExpenseScreenStyle';
import {apply} from '@Themes/OsmiProvider';
import {formatMoney, moneytoInt} from '@Lib/TextUtils';

const AddExpenseScreen = (props) => {
  const {addExpenses, navigation} = props;
  const modalRef = useRef();
  const [form, setForm] = useState({
    name: '',
    category: null,
    date: null,
    nominal: '',
  });
  const disabled =
    !form?.name || !form?.category || !form?.date || !form?.nominal;

  const handleChange = useCallback(
    (name, val) => {
      setForm({
        ...form,
        [name]: val,
      });
      modalRef?.current?.hide();
    },
    [form],
  );

  const handleSubmit = useCallback(() => {
    addExpenses(form);
    PushNotification.localNotification({
      channelId: 'to-the-rich-app',
      title: form?.name, // (optional)
      message: `Berhasil menyimpan pengeluaran ${form?.name}`,
    });
    navigation.goBack();
  }, [form]);

  const handleModal = useCallback(() => {
    modalRef?.current?.show();
  }, []);

  const renderCategory = (item) => (
    <TouchableOpacity
      onPress={() => handleChange('category', item)}
      activeOpacity={0.9}
      style={styles.category}>
      <Category id={item?.id} />
      <Text style={styles.categoryLabel}>{item?.title}</Text>
    </TouchableOpacity>
  );

  const categoryValue = () =>
    form?.category ? (
      <View style={styles.categoryValue}>
        <Category id={form?.category?.id} size={24} />
        <Text style={styles.categoryValueLabel}>{form?.category?.title}</Text>
      </View>
    ) : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={apply('flex-grow py-3')}
        keyboardShouldPersistTaps="always">
        <InputText
          placeholder="Nama Pengeluaran"
          value={form?.name}
          onChangeText={(val) => handleChange('name', val)}
        />
        <PressableInput
          value={categoryValue()}
          placeholder="Pilih Kategori"
          onPress={handleModal}
        />
        <DatePicker
          value={form?.date}
          setValue={(val) => handleChange('date', val)}
          datePickerProps={{maximumDate: new Date()}}
        />
        <InputText
          placeholder="Nominal"
          prefix="Rp"
          value={formatMoney(form?.nominal)}
          onChangeText={(val) =>
            handleChange('nominal', moneytoInt(val?.replace(/[\D^+\s]+$/g, '')))
          }
          keyboardType="numeric"
        />
        <Button
          disabled={disabled}
          onPress={handleSubmit}
          style={[styles.button, disabled && apply('bg-gray')]}>
          <Text style={styles.labelButton}>Simpan</Text>
        </Button>
      </ScrollView>
      <BottomSheet height={355} title="Pilih Kategori" ref={modalRef}>
        <FlatList
          data={CATEGORY}
          keyExtractor={(_, i) => String(i)}
          numColumns={3}
          renderItem={({item}) => renderCategory(item)}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (data) => dispatch(ExpensesActions.storeExpenses(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseScreen);
