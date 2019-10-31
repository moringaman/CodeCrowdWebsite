<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="yellow darken-4 black--text"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!--<v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
        <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
        <v-parallax
          id="header-image"
          src="https://images.unsplash.com/photo-1568992688243-52608227497d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          max-width="100%"
          height="300"
          gradient="17deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%"
        />
      <v-container>
        <h1
          id="heading"
          class="banner-heading"
        >
        CodeCrowd
       </h1>
        <h1
          id="heading-2"
          class="banner-heading"
        >
        Catford
       </h1>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Meetups',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'CodeCrowd'
    }
  }
}
</script>

<style lang="scss">
#header-image {
  margin-top: -30px;
}
#heading {
  transform: rotateZ(-4deg) translateY(-200px);
  margin-left: 10%;
  z-index: 1000;
  &-2 {
  transform: rotateZ(2deg) translate(-246px, -120px);
  // margin-left: 10%;
  }
}
.banner-heading {
  font-size: 3rem;
  background-color: black;
  padding: 0px 15px;
  display: inline-block;
  border-radius: 5px;
}
</style>
