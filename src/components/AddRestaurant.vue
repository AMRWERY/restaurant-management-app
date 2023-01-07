<template>
  <TheHeader />
  <div class="container">
    <div class="row">
      <div class="col">
        <v-card class="mx-auto" max-width="500">
          <h5>Add new Restaurant</h5>
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
            @click="addRestaurant"
            class="btn"
            variant="flat"
            color="primary"
            >Add Restaurant</v-btn
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
  name: "AddRestaurant",

  components: {
    TheHeader,
  },

  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        logo: '',
        contact: ''
      },
    };
  },

  methods: {
   async addRestaurant() {
      const result = await axios.post("http://localhost:4000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        logo: this.restaurant.logo,
        contact: this.restaurant.contact,
      });
      console.log('result', result)
      if (result.status == 201) {
        this.$router.replace('/')
      }
    },
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
