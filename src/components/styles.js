import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainerSignIn: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    paddingTop: 50,
  },
  mainContainerSignUp: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  mainHeading: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 700,
    color: 'purple',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 700,
    margin: 10,
    color: '#4f4a4a',
  },
  inputBox: {
    height: 40,
    width: '100%',
    borderColor: '#a0a0a0',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    fontWeight: 600,
    fontSize: 16,
    color: '#7a33ab',
  },
  signInButton: {
    borderRadius: 5,
    height: 40,
    width: '100%',
    backgroundColor: '#e3ccf3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  subContainer: {
    marginTop: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {width: '48%'},
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#95d7c1',
    paddingHorizontal: 20,
  },
  buttonTextContainer: {justifyContent: 'center'},
  iconButtonText: {
    verticalAlign: 'middle',
    textAlignVertical: 'center',
    color: '#95d7c1',
    fontWeight: 'bold',
    marginLeft: 25,
  },
  buttonImage: {width: 25, height: 40},
  footerText: {color: '#954bc9', fontWeight: 700},
  footer: {marginTop: 100},
  signUpFooter: {marginTop: 30},
});
