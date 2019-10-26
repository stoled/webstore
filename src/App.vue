<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-text="brand"></router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: "Webstore",
      roduct: {
        id: 1,
        title: "Product 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi.",
        price: 99,
        image: 'assets/images/product-1.png'
      }
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
