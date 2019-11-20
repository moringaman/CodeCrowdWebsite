// import Firebase from '../../helpers/FirebaseAuth'
// const auth = new Firebase.auth()
const state = {
  loggedIn: false
};

const actions = {
  logEnvironment: () => {
    console.log(process.env.FIREBASE_API_KEY);
  }
};

const getters = {
  loggedIn: state => state.loggedIn
};

export default {
  state,
  // mutations,
  actions,
  getters
};
