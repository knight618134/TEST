<template>
  <v-container class="text-md-center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>登入</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="mdi-account"
                name="login"
                label="Login"
                v-model="userName"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="mdi-lock"
                name="password"
                v-model="userPassword"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-checkbox v-model="rememberData" :label="`記住資訊`"></v-checkbox>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Cookies from 'js-cookie'
// const TokenKey = 'Admin-Token'
// // export function getToken() {
// //  return Cookies.get(TokenKey)
// // }

// // export function setToken(tcuncuoken) {
// //  return Cookies.set(TokenKey,token)
// // }

// // export function removeToken() {
// //  return Cookies.remove(TokenKey)
// // }
export default {
  data() {
    return {
      userPassword: "",
      userName: "",
      rememberData:false
    };
  },
  methods: {
    login() {
      console.log("go");
    },
  },
};
</script>

<style scoped>
.text-md-center {
  margin: 150px 0 0 0;
}
</style>
