<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      <v-icon>edit</v-icon>
      Edit Date
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
            <v-date-picker v-model="editableDate" style="width=100%" actions>
              <template slot-scope="{save, cancel}">
                <v-btn flat class="red--text darken-1" @click="editDialog = false">Close</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>  
              </template>
            </v-date-picker>
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
        editableDate: null
      }
    },
    methods: {
      onSaveChanges () {
        const newDate = new Date(this.meetup.date)
        const newDay = new Date(this.editableDate).getUTCDate()
        const newMonth = new Date(this.editableDate).getUTCMonth()
        const newYear = new Date(this.editableDate).getUTCFullYear()
        newDate.setUTCDate(newDay)
        newDate.setUTCMonth(newMonth)
        newDate.setUTCFullYear(newYear)

        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: newDate
        })
        this.editDialog = false
      }
    },
    created () {
      // this.editableDate = new Date(this.meetup.date)
      let date = new Date(this.meetup.date) // set Date to the date of meetup
      let day = date.getUTCDate()  // +1 cuz the days are counted from 0-30
      let month = date.getUTCMonth() + 1 // +1 cuz the months are counted from 0 to 11
      let year = date.getUTCFullYear()
      this.editableDate = year + '-' + month + '-' + day
    }
  }
</script>
