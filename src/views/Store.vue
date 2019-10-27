<template>
  <div class="home">
    <div>
      <button type="button" v-on:click="showCheckout">
        <span>Cart: {{ cartItemCount }}</span>
      </button>
    </div>

    <div>

      <div class="product" v-if="showProduct">
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
        <p>First Name:</p>
        <input type="text" v-model="order.firstName">

        <p>Last Name:</p>
        <input type="text" v-model="order.lastName">

        <p>Address:</p>
        <input type="text" v-model="order.address">

        <p>City:</p>
        <input type="text" v-model="order.city">

        <p>State:</p>
        <select v-model="order.state">
          <option disabled value=""></option>
          <option>AL</option>
          <option>AR</option>
          <option>CA</option>
          <option>NV</option>
        </select>

        <p>Zip / Postal Code:</p>
        <input type="text" v-model="order.zip">
        <br>

        <input type="checkbox" id="gift" 
          value="true" v-model="order.gift">
        <label for="gift">Ship as gift?</label>
        <br>

        <input type="radio" id="home" 
          value="Home" v-model="order.method">
        <input type="radio" id="business" 
          value="Business" v-model="order.method">
        <label for="business">Business</label>
        <br>

        <button type="submit" 
          v-on:click="submitForm">Place Order</button>

        <pre>
          First Name: {{order.firstName}}
          Last Name: {{order.lastName}}
          Address: {{order.address}}
          City: {{order.city}}
          State: {{order.state}}
          Zip: {{order.zip}}
          Gift: {{order.gift}}
          Method: {{order.method}}
        </pre>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'store',
  data() {
    return {
      showProduct: true,
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        gift: false,
        method: 'Home'
      },
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
    },
    submitForm() {
      alert('Submitted');
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
  padding: 20px;
  background-color: #eee;
  figure {
    margin: 0;
  }
  img {
    width: 100%;
  }
}
</style>