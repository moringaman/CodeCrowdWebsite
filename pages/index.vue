<template>
  <v-layout row justify-space-around mt-12>
    <v-flex xs12 md12 sm12>
        <div class="text-center mt-9 mb-12">
          <h1>Welcome to The CodeCrowd</h1>
        </div>
      <v-card
        class="mt-4 outlined"
        dark
      >
        <v-card-title />
        <v-card-text class="headline">
          The CodeCrowd is very much a community project designed to
          provide opportunities for web developers and coders to
          meetup locally.
          Our meetups provide a way for software developers
          to network, brainstorm ideas, collaborate on projects and
          generally share in our mutual love for all things
          code related..
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
         <v-card-title>
           Community
         </v-card-title>
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
      <v-card-title>
        Collaboration
      </v-card-title>
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
    <v-flex md6 sm6 xs12>
      <div class="address">
        <h2>Contact Us
        </h2>
        <div class="contact-area">
          <div class="contacts">
            <v-row>
              <v-col
                cols="1"
              >
                <v-icon>mdi-at</v-icon>
              </v-col>
              <v-col>
                <div class="caption">
                  info@thecodecrowd.co.uk
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-icon>mdi-phone</v-icon>
              </v-col>
              <v-col>
                <div class="caption">
                  020 3005 9450
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-icon>mdi-discord</v-icon>
              </v-col>
              <v-col>
                <div class="caption">
                 thecodecrowd
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-flex>
    <v-flex md6 sm6 xs12>
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

export default {
  components: {
    // Logo,
    // VuetifyLogo
  }
}
</script>

<style lang="scss">
 .address {
   padding: 1rem;
 }
 .contact-area {
   margin-top: 1rem;
 }
</style>
