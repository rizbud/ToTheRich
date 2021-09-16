import {connect} from '@Themes/OsmiProvider';

export default connect({
  container: 'flex bg-white',
  content: 'py-4',
  header: 'my-3 px-4',
  h1: 'font-bold text-lg',
  h2: 'font-regular text-white mb-3',
  text: 'font-regular text-gray-3',
  summary: 'row items-center my-3 px-4',
  card: 'flex rounded-xl p-4',
  floatingBtn:
    'absolute z-10 bottom-5 right-5 w-48 h-48 bg-teal rounded-full items-center justify-center',
});
