<template>
  <v-app >
    <v-navigation-drawer temporary v-model="sideNav" class="secondary" absolute> <!-- боковое меню слева -->
      <v-list>
        <v-list-tile
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="primary"> <!-- верхняя менюшка -->

      <v-toolbar-side-icon @click.native.stop = "sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <!--hidden-sm-and-up  - иконка СКРЫТА на малых экранах И ВЫШЕ (Т.Е. НА БОЛЬШПХ) -->

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">DevMeetup </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only"> <!-- пункты менюшки -->

        <v-btn
                flat
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
        >
          <v-icon left dark> {{ item.icon }} </v-icon>
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
      <!--<div style="width: 100%; height: 50px; border: 1px solid red;"></div>-->
    </main>






  </v-app>
</template>

<script>
import Hello from "./components/Hello"

export default {
  name: 'app',
  components: {'hello':Hello},
  data () {
    return {
      sideNav: false,
      menuItems: [
          {icon: 'supervisor_account', title: 'View Meetups', link:'/meetups' },
          {icon: 'room', title: 'Organize Meetup', link:'/meetup/new' },
          {icon: 'person', title: 'Profile', link:'/profile' },
          {icon: 'face', title: 'Sing up', link:'/signup' },
          {icon: 'lock_open', title: 'Sign in', link:'/signin' }
      ]
    }
  }
}
</script>

<style lang="scss">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
