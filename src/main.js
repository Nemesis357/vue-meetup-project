import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import Alert from './components/Shared/Alert'
import EditMeetupDetailsDialog from './components/Meetups/Edit/EditMeetupDetailsDialog'
import EditMeetupDateDialog from './components/Meetups/Edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/Meetups/Edit/EditMeetupTimeDialog'
import RegisterDialog from './components/Meetups/Edit/Registration/RegisterDialog'

Vue.filter('date', DateFilter)
Vue.component('app-alert', Alert)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-register-dialog', RegisterDialog)

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    info: '#347',
    orange: '#d29f10'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCaF1LzqTd8PhUTnBFd2m05XcZh_oFxelM',
      authDomain: 'devmeetup-ad154.firebaseapp.com',
      databaseURL: 'https://devmeetup-ad154.firebaseio.com',
      projectId: 'devmeetup-ad154',
      storageBucket: 'gs://devmeetup-ad154.appspot.com'
    })
    // Triggered whenever auth state changes
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignin', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
