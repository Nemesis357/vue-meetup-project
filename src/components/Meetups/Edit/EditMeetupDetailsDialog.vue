<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>Edit Meetup</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                v-model="title"
                id="title"></v-text-field>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat class="red--text darken-1" @click="editDialog = false">Close</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
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
        title: this.meetup.title,
        description: this.meetup.description
      }
    },
    methods: {
      onSaveChanges () {
        if (this.title.trim() === '' || this.description.trim() === '') return
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          title: this.title,
          description: this.description
        })
        this.editDialog = false
      }
    }
  }
</script>
