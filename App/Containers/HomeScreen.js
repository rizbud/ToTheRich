import {useCallback} from 'react';
import {connect} from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '@Redux/YourRedux'
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CategoryExpensesList, DailyExpensesList} from '@Components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GroupByTime from 'group-by-time';

// Styles
import styles from './Styles/HomeScreenStyle';
import {apply} from '@Themes/OsmiProvider';
import {formatMoney} from '@Lib/TextUtils';

const HomeScreen = (props) => {
  const {navigation, expenses} = props;

  const getTotalExpenses = useCallback(
    (groupBy) => {
      const groupExpenses = GroupByTime(expenses, 'date', groupBy);
      const sortedArr = Object.keys(groupExpenses)?.sort()?.reverse();
      const todayExpenses = groupExpenses[sortedArr[0]];
      const totalExpenses = todayExpenses
        ?.map((item) => item?.nominal)
        ?.reduce((a, b) => Number(a) + Number(b));
      return totalExpenses;
    },
    [expenses],
  );

  const _header = () => (
    <View style={styles.header}>
      <Text style={styles.h1}>Halo, User!</Text>
      <Text style={styles.text}>Jangan lupa catat keuanganmu setiap hari!</Text>
    </View>
  );

  const _summary = () => (
    <View style={styles.summary}>
      <View style={[styles.card, apply('bg-blue mr-2')]}>
        <Text style={styles.h2}>Pengeluaranmu{'\n'}hari ini</Text>
        <Text style={[styles.h1, apply('text-white')]}>
          Rp{formatMoney(getTotalExpenses('day'))}
        </Text>
      </View>
      <View style={[styles.card, apply('bg-teal ml-2')]}>
        <Text style={styles.h2}>Pengeluaranmu{'\n'}bulan ini</Text>
        <Text style={[styles.h1, apply('text-white')]}>
          Rp{formatMoney(getTotalExpenses('month'))}
        </Text>
      </View>
    </View>
  );

  const _floatingBtn = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddExpenses')}
      activeOpacity={0.9}
      style={styles.floatingBtn}>
      <Icon name="plus" size={28} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <DailyExpensesList
        data={expenses}
        ListHeaderComponent={
          <>
            {_header()}
            {_summary()}
            {expenses?.length > 0 && <CategoryExpensesList data={expenses} />}
          </>
        }
      />
      {_floatingBtn()}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses.expenses,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
