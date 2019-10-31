<template>
  <v-layout>
    <v-flex class="text-left">
      <template>
        <section>
          <v-card
            class="mx-auto meetup-card"
            max-width="100%"
            outlined
          >
            <v-img
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              max-width="100%"
              max-height="200"
              aspect-ratio="1"
            />
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  NEXT MEETUP
                </div>
                <v-list-item-title class="headline mb-1">
                  Code Sunday
                </v-list-item-title>
                <v-list-item-subtitle>
                  Code and Coffee meetup at the mews
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                outlined
                color="yellow darken-4"
                text
                small
              >
                Info
              </v-btn>
              <v-btn
                color="yellow darken-4"
                text
                small
              >
                Attend
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            class="mx-auto meetup-card"
            max-width="100%"
            outlined
          >
            <v-img
              src="https://images.unsplash.com/1/bag-and-hands.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              max-width="100%"
              max-height="200"
              aspect-ratio="1"
            />
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  NEXT MEETUP
                </div>
                <v-list-item-title class="headline mb-1">
                  Code Sunday
                </v-list-item-title>
                <v-list-item-subtitle>
                  Code and Coffee meetup at the mews
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                text
                small
              >
                Info
              </v-btn>
              <v-btn
                outlined
                color="yellow darken-4"
                text
                small
              >
                Attend
              </v-btn>
            </v-card-actions>
          </v-card>
        </section>
      </template>
    </v-flex>
  </v-layout>
</template>

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
