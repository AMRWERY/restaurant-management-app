<template>
  <TheHeader />
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="item in restaurant" :key="item.id">
        <v-card class="mx-auto" max-width="200">
          <v-img :src="item.logo" height="200px" cover></v-img>

          <v-card-title class="name"> {{ item.name }} </v-card-title>

          <router-link :to="'/update/' + item.id"
            ><i class="fa-solid fa-pen-to-square fa-lg"></i
          ></router-link>
          <button @click="deleteResturant(item.id)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-card-text>
                Address: {{ item.address }}
                <br />
                Contact Number: {{ item.contact }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import axios from "axios";

export default {
  name: "HomePage",

  components: {
    TheHeader,
  },

  data() {
    return {
      restaurant: [],
      show: false,
    };
  },

  methods: {
    async deleteResturant(id) {
      const result = await axios.delete(
        "http://localhost:4000/restaurants/" + id
      );

      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      const user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.replace("sign-up");
      }

      const result = await axios.get("http://localhost:4000/restaurants");
      this.restaurant = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.mx-auto {
  margin-top: 15px;
}

.name {
  text-align: center;
}

i {
  text-decoration: none;
  color: red;
  text-align: center;
  margin-right: 15px;
  margin-left: 15px;
}
</style>
