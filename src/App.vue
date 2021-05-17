<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            作業
          </v-list-item-title>
          <v-list-item-subtitle> 第二週 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="header">
      <div
        class="d-flex flex-row justify-space-between align-center"
        style="width:100%"
      >
        <v-app-bar-nav-icon style="color:white" @click.stop="openSideBar()">
        </v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true,

    items: [
      {
        title: "首頁",
        icon: "mdi-chart-timeline-variant",
        link: "/",
      },
      {
        title: "ToDoList",
        icon: "mdi-sim-alert",
        link: "appTodo",
      },
      {
        title: "使用者設定",
        link: "Login",
        icon: "mdi-account",
      },
    ],
  }),
  methods: {
    openSideBar() {
      this.drawer = !this.drawer
    },
  },
}
</script>

<style scoped>
</style>
