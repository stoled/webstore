<template>
  <div class="home">
    <h1>Home</h1>

    <div class="product">
      <figure class="image">
        <img v-bind:src="product.image">
      </figure>
      <div>
        <h2 v-text="product.title"></h2>
        <p v-html="product.description"></p>
        <p>{{ product.price | formatPrice }}</p>
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
          "<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit.",
        price: 99.99,
        // image: "./images/product-1.png"
        image: require("@/assets/images/product-1.png")
      }
    };
  },
  filters: {
    formatPrice: function(price) {
      return "$" + price;
    }
  }
};
</script>

<style lang="scss">
.product {
  width: 25%;
  min-width: 200px;
  text-align: left;
  figure {
    margin: 0;
  }
  img {
    width: 100%;
  }
}
</style>