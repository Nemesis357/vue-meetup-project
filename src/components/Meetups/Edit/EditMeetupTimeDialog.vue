<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      <v-icon>edit</v-icon>
      Edit Time
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>Edit Meetup Date</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout>
          <v-flex xs12>
            <v-time-picker v-model="editableTime" style="width=100%" actions format="24hr">
              <template slot-scope="{save, cancel}">
                <v-btn flat class="red--text darken-1" @click="editDialog = false">Close</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
              </template>
            </v-time-picker>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default{
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editableTime: null
      }
    },
    methods: {
      onSaveChanges () {
        const newDate = new Date(this.meetup.date)
        const hours = this.editableTime.match(/^(\d+)/)[1]
        const minutes = this.editableTime.match(/:(\d+)/)[1]
        newDate.setMinutes(minutes)
        newDate.setHours(hours)
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: newDate
        })
        this.editDialog = false
      }
    },
    created () {
      this.editableTime = new Date(this.meetup.date)
    }
  }
</script>
