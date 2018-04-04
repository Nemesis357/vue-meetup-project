<template>
	<v-container>
		<v-layout row wrap mb-2>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
				<v-btn large router to="/meetups">Explore Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn large router to="/meetup/new">Organize Meetups</v-btn>
			</v-flex>
		</v-layout>
		<!-- Progress Loader -->
		<v-layout row v-if="loading">
			<v-flex xs12 class="text-xs-center">
				  <v-progress-circular indeterminate :width="3" :size="50" color="red"></v-progress-circular>
			</v-flex>
		</v-layout>
		<v-layout row wrap v-else="loading">
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item 
						v-for="meetup in meetups" 
						:src="meetup.imageUrl" 
						:key="meetups.id"
						>
						<div class="title" @click='onLoadMeetup(meetup.id)' style="cursor: pointer;">
							{{ meetup.title }}
						</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
		<v-layout row wrap mt-2>
			<v-flex xs12 class="text-xs-center">
				<p>Join our awesome meetups</p>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
	.title{
		position: absolute;
		bottom: 50px;
		left: 0;
		right: 0;
		padding: 10px 0;
		background-color: rgba(0,0,0,0.5);
		text-align: center;
	}
</style>






















