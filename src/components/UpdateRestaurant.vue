<template>
  <TheHeader />
  <div class="container">
    <div class="row">
      <div class="col">
        <v-card class="mx-auto" max-width="500">
          <h5>Update Restaurant</h5>
          <v-container>
            <v-text-field
              v-model.trim="restaurant.name"
              color="primary"
              label="Name"
              variant="underlined"
            ></v-text-field>

            <v-textarea
              v-model.trim="restaurant.address"
              color="primary"
              label="Address"
              variant="underlined"
            ></v-textarea>

            <v-text-field
              v-model="restaurant.logo"
              color="primary"
              label="Logo"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model.trim="restaurant.contact"
              color="primary"
              label="Contact"
              placeholder="Enter your password"
              variant="underlined"
            ></v-text-field>
          </v-container>

          <v-btn
            @click="updateRestaurant"
            class="btn"
            variant="flat"
            color="primary"
            >Update Restaurant</v-btn
          >
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../ui/TheHeader.vue";
import axios from "axios";

export default {
  name: "UpdateRestaurant",

  components: {
    TheHeader,
  },

  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        logo: "",
        contact: "",
      },
    };
  },

  methods: {
    async updateRestaurant() {
      /* console.log(this.restaurant) */
      /* const result = await axios.put("http://localhost:4000/restaurants/" + this.$route.params.id, */
      const result = await axios.put(`https://my-json-server.typicode.com/AMRWERY/restaurant-management-app-json/restaurants/` + this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        logo: this.restaurant.logo,
        contact: this.restaurant.contact,
      });
      console.log('result', result)
      if (result.status == 200) {
        this.$router.replace('/')
      }
    }
  },

  async mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.replace("/sign-up");
    }
    /* console.log(this.$route.params.id) */
    /* const result = await axios.get("http://localhost:4000/restaurants/" + this.$route.params.id); */
    const result = await axios.get(`https://my-json-server.typicode.com/AMRWERY/restaurant-management-app-json/restaurants/` + this.$route.params.id);
    console.log(result);
    this.restaurant = result.data;
  },
};
</script>

<style scoped>
.container {
  margin: 5rem auto;
  text-align: center;
}

.btn {
  margin: 7px auto;
}
</style>
