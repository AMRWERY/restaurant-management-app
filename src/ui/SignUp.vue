<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <v-card class="mx-auto" max-width="344">
          <img src="../assets/logo.png" alt="" />

          <h5>Sign-Up Your Account</h5>
          <v-container>
            <v-text-field
              v-model.trim="name"
              color="primary"
              label="Name"
              variant="underlined"
            ></v-text-field>

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

          <v-spacer></v-spacer>

          <v-btn @click="signUp" variant="flat" color="primary"> SignUp </v-btn>

          <hr />
          <p>Already Have Account? <router-link to="/login">Login</router-link> </p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: null,
    };
  },

  methods: {
    async signUp() {
      /* const result = await axios.post("http://localhost:4000/users", */
      const result = await axios.post(`https://my-json-server.typicode.com/AMRWERY/restaurant-management-app-json/users`, {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.replace("/");
      }
    },
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

.btn {
  margin: 7px 7px;
}

a {
  text-decoration: none;
}
</style>
