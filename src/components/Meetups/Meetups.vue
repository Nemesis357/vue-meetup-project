<template>
	<v-container>
		<v-layout wrap row v-for="meetup in meetups" :key="meetup.id" class="mb-2">
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-card class="info" >
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-card-media
						          class="white--text"
						          height="150px"
						          :src=meetup.imageUrl
						        ></v-card-media>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
								        <h2 class="yellow--text">{{ meetup. title }}</h2>
								        <div>{{ meetup.date | date }}</div>
									</div>
							    </v-card-title>
							    <v-card-actions>
							    	<v-btn :to="'/meetups/' + meetup.id">
							    		View Meetup
							    		<v-icon right>arrow_forward</v-icon>
							    	</v-btn>
							    </v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
























