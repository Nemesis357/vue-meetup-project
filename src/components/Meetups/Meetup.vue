<template>
  <v-container>
    <!-- Progress Loader -->
    <v-layout row v-if="loading">
      <v-flex xs12 class="text-xs-center">
          <v-progress-circular indeterminate :width="3" :size="50" color="red"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2>{{ meetup.title }}</h2>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
            </template>
          </v-card-title>
          <v-card-media
          class="white--text"
          height="400px"
          :src=meetup.imageUrl
          ></v-card-media>
          <v-card-text>
            <div class="orange--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
            <div v-if="userIsCreator">
              <app-edit-meetup-date-dialog :meetup="meetup"></app-edit-meetup-date-dialog>
              <app-edit-meetup-time-dialog :meetup="meetup"></app-edit-meetup-time-dialog>
            </div>
            <div>{{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-register-dialog :meetupId="meetup.id" v-if="!userIsCreator && userIsAuthenticated"></app-register-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template<>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) return false
        return this.$store.getters.user.id === this.meetup.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>