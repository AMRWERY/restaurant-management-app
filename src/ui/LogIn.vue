<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <v-card class="mx-auto" max-width="344">
          <img src="../assets/logo.png" alt="" />

          <h5>Login Into Your Account</h5>
          <v-container>
            <v-text-field
              v-model.trim="email"
              color="primary"
              label="Email"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model.trim="password"
              color="primary"
              label="Password"
              type="password"
              placeholder="Enter your password"
              variant="underlined"
            ></v-text-field>
          </v-container>

          <v-btn @click="login" variant="flat" color="primary">Login</v-btn>

          <hr />
          <p>Didn't Have Account? <router-link to="/sign-up">Sign Up</router-link> </p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LogIn",

  data() {
    return {
      email: "",
      password: '',
    };
  },

  methods: {
    async login() {
      /* const result = await axios.get(`http://localhost:4000/users?email=${this.email}&password=${this.password}`) */
      const result = await axios.get(`https://my-json-server.typicode.com/AMRWERY/restaurant-management-app-json/users?email=${this.email}&password=${this.password}`)
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.replace("/");
      }
    }
  },

  mounted() {
    const user = localStorage.getItem("user-info");

    if (user) {
      this.$router.replace("/");
    }
  },
};
</script>

<style scoped>
 .container {
  margin: 3rem auto;
  text-align: center;
}

a {
  text-decoration: none;
}
</style>
