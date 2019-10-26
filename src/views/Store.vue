<template>
  <div class="home">
    <div>
      <button type="button" v-on:click="showCheckout">
        <span>Cart: {{ cartItemCount }}</span>
      </button>
    </div>

    <div class="product">

      <div v-if="showProduct">
        <figure class="image">
          <img v-bind:src="product.image">
        </figure>
        <div>
          <h2 v-text="product.title"></h2>
          <p v-html="product.description"></p>
          <p>{{ product.price | formatPrice }}</p>
          <button v-on:click="addToCart" v-if="canAddToCart">
            Add
          </button>
          <button v-else>
            Nope
          </button>
        </div>
      </div>

      <div v-else>
        Checkout
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showProduct: true,
      product: {
        id: 1,
        title: "Product 1",
        description:
          "<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit.",
        price: 99.99,
        // image: "./images/product-1.png"
        image: require("@/assets/images/product-1.png"),
        availableInventory: 5
      },
      cart: []
    };
  },
  filters: {
    formatPrice: function(price) {
      return "$" + price;
    }
  },
  methods: {
    addToCart: function() {
      this.cart.push( this.product.id );
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    }
  },
  computed: {
    cartItemCount: function() {
      return this.cart.length || '';
    },
    canAddToCart: function() {
      return this.product.availableInventory > this.cartItemCount;
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