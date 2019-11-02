<template>
  <v-layout row justify-space-around>
    <v-flex xs12 md12 sm12>
        <div class="text-center">
          <h1>The CodeCrowd Meetups</h1>
        </div>
    </v-flex>
      <v-flex
        md12
        sm12
        xs12
      >
        <v-card
          class="mx-auto"
         >
          <v-img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="200"
          />
         <v-card-text>
           <v-row>
            <v-col col="12" md="12">
              We believe that by fostering a common unity between neighbours,
              we can empower each other to achieve..
            </v-col>
           </v-row>
           <v-row>
             <v-col col="10"></v-col>
            <v-col col="4" md="4">
              <v-btn small outlined>Read More</v-btn>
            </v-col>
           </v-row>
         </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        md6
        sm12
        xs12
      >
        <v-card
          class="mx-auto"
         >
          <v-img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="200"
          />
         <v-card-text>
           <v-row>
            <v-col col="12" md="12">
              We believe that by fostering a common unity between neighbours,
              we can empower each other to achieve..
            </v-col>
           </v-row>
           <v-row>
             <v-col col="10"></v-col>
            <v-col col="4" md="4">
              <v-btn small outlined>Read More</v-btn>
            </v-col>
           </v-row>
         </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        md6
        sm12
        xs12
      >
        <v-card
          class="mx-auto"
         >
          <v-img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="200"
          />
         <v-card-text>
           <v-row>
            <v-col col="12" md="12">
              We believe that by fostering a common unity between neighbours,
              we can empower each other to achieve..
            </v-col>
           </v-row>
           <v-row>
             <v-col col="10"></v-col>
            <v-col col="4" md="4">
              <v-btn small outlined>Read More</v-btn>
            </v-col>
           </v-row>
         </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        md6
        sm12
        xs12
      >
        <v-card
          class="mx-auto"
         >
          <v-img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="200"
          />
         <v-card-text>
           <v-row>
            <v-col col="12" md="12">
              We believe that by fostering a common unity between neighbours,
              we can empower each other to achieve..
            </v-col>
           </v-row>
           <v-row>
             <v-col col="10"></v-col>
            <v-col col="4" md="4">
              <v-btn small outlined>Read More</v-btn>
            </v-col>
           </v-row>
         </v-card-text>
        </v-card>
      </v-flex>
    <v-flex
      md6
      sm12
      xs12
    >
    <v-card
      class="mx-auto"
      >
      <v-img
        src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        width="100%"
        height="200"
      />
      <v-card-text>
        <v-row>
        <v-col col="12" md="12">
          We believe that by fostering a common unity between neighbours,
          we can empower each other to achieve..
        </v-col>
        </v-row>
        <v-row>
          <v-col col="10"></v-col>
        <v-col col="4" md="4">
          <v-btn small outlined>Read More</v-btn>
        </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    </v-flex>
    <v-flex md6 sm12 xs12>Empty</v-flex>
    <v-flex md6 sm12 xs12>
      <v-card
        color="yellow darken-4"
      >
      <v-card-title>
       Please send me info about meetups in my area
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col col="12" md="8">
              <v-text-field
                label="E-mail"
                required
              >
            </v-text-field>
            </v-col>
            <v-col>
              <v-btn large>SUBSCRIBE</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      meetups: [
        {}
      ]
    }
  },
  computed: {
  },
  created () {
    this.env()
  },
  methods: {
    ...mapActions(['logEnvironment']),
    env () {
      this.logEnvironment()
    }
  }
}
</script>
<style lang="scss">
  .meetup-card {
    margin: 10px 0px;
  }
   section {
     display: grid;
     grid-template-columns: 1fr;
     grid-gap: 2rem;
     width: 100%;
     @media screen and (min-width: 775px) {
       grid-template-columns: repeat(2, 1fr);
     }
   }
</style>
