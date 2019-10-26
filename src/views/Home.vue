<template>
  <div class="home">
    <h1>Home</h1>

    <div class="product">
      <figure class="image">
        <img v-bind:src="product.image">
      </figure>
      <div>
        <h2 v-text="product.title"></h2>
        <p v-text="product.description"></p>
        <p v-text="product.price + ' $'" class="price"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        title: "Product 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi.",
        price: 99,
        image: require("@/assets/images/product-1.png")
      }
    };
  }
};
</script>

<style lang="scss">
.product {
  width: 25%;
  text-align: left;
  figure {
    margin: 0;
  }
  img {
    width: 100%;
  }
}
</style>