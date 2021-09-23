import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import StartupActions from '@Redux/StartupRedux';
import ReduxPersist from '@Config/ReduxPersist';
import AppNavigation from '@Navigation/AppNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import Startapp from 'react-native-startapp';
import Env from 'react-native-config';

// styles
import {apply} from '@Themes/OsmiProvider';

const RootContainer = (props) => {
  useEffect(() => {
    loadStartApp();
    if (!ReduxPersist.active) {
      props.startup();
    }
  }, []);

  const loadStartApp = async () => {
    await Startapp.initialize(Env.STARTAPP_APP_ID, false);
    await Startapp.disableSplash();
    await Startapp.hasPromptedStartAppConsent(); // true if the automatic StartApp prompt has been accepted or declined; false otherwise
    await Startapp.hasAgreedToStartAppConsent(); // boolean
    await Startapp.setTestAdsEnabled(true);
    await Startapp.setUserConsent(true);
  };

  return (
    <SafeAreaView style={apply('flex')}>
      <StatusBar barStyle="dark-content" backgroundColor={apply('white')} />
      <AppNavigation />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
