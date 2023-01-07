<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU"
          :title="name"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            to="/"
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            to="/add"
            prepend-icon="mdi-plus"
            title="Add Restaurant"
            value="account"
          ></v-list-item>
          <v-list-item
            @click="logout"
            prepend-icon="mdi-arrow-right"
            title="Logout"
            value="home"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      name: "",
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "Add Restaurant", icon: "mdi-plus" },
      ],
      rail: true,
    };
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.replace("/login");
    },
  },

  mounted() {
    const user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
  },
};
</script>
