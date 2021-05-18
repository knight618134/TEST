<template>
  <v-container class="text-md-center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12">
        <v-btn color="primary" v-if="isLogin" @click="logOut">登出</v-btn>
        <v-card class="card-section" v-if="!isLogin">
          <v-toolbar dark color="primary">
            <v-toolbar-title>登入</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="mdi-account"
                name="login"
                label="Login"
                v-model="user.name"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="mdi-lock"
                name="password"
                v-model="user.password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-checkbox
              class="mr-5"
              v-model="user.rememberData"
              :label="`記住資訊`"
            ></v-checkbox>
            <v-btn color="primary" @click="login">登入</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
        rememberData: false,
      },

      tokenKey: "Admin-Token",
      isLogin: false,
    };
  },
  mounted() {
    this.isLogin = this.getToken(this.tokenKey);
  },
  methods: {
    login() {
      this.user.password = CryptoJS.AES.encrypt(
        this.user.password,
        "secret key 123"
      ).toString();
      this.setToken(this.user);
      this.user = {};
      this.isLogin = true;
    },
    getToken() {
      return Cookies.get(this.tokenKey) ? true : false;
    },
    setToken(tcuncuoken) {
      return Cookies.set(this.tokenKey, tcuncuoken, { expires: 1, path: '/'  });
    },
    removeToken() {
      return Cookies.remove(this.tokenKey);
    },
    catchUserData() {
      const tokenData = Cookies.get(this.tokenKey);
      if (tokenData) {
        const { name, password, rememberData } = JSON.parse(tokenData);
        if (rememberData) {
          const bytes = CryptoJS.AES.decrypt(password, "secret key 123");
          const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
          this.user.name = name;
          this.user.password = originalPassword;
        }
      }
    },
    async logOut() {
      await this.catchUserData();
      await this.removeToken();
      this.isLogin = false;
    },
  },
};
</script>

<style scoped>
.text-md-center {
  margin: 150px 0 0 0;
}
.card-section {
  max-width: 600px;
  margin: auto;
}
</style>
