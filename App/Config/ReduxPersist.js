import immutablePersistenceTransform from '@Services/ImmutablePersistenceTransform';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'to-the-rich',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['login', 'search', 'nav'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['expenses'],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
