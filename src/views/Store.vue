<template>
  <div class="home">
    <div>
      <button type="button" v-on:click="showCheckout">
        <span>Cart {{ cartItemCount }}</span>
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
          <span v-if="product.availableInventory - cartItemCount === 0">
            All out!
          </span>
          <span v-else-if="product.availableInventory - cartItemCount < 5">
            Only {{product.availableInventory - cartItemCount}} left!
          </span>
          <span v-else>
            Buy now!
          </span>
          <div class="rating">
            <span v-for="n in 5"
              v-bind:class="{'rating-active': checkRating(n)}">
              &#9733;</span>
          </div>
        </div>
      </div>

      <div class="cart" v-else>
        <input type="text" v-model.trim="order.firstName"
          placeholder="First Name">

        <input type="text" v-model.trim="order.lastName"
          placeholder="Last Name">
        <br>

        <input type="text" v-model.trim="order.address"
        placeholder="Address">

        <input type="text" v-model.trim="order.city"
        placeholder="City">
        <br>

        <select v-model="order.state">
          <option disabled value="">State</option>
          <option v-for="(state, key) in states"
            v-bind:value="state">
            {{key}}
          </option>
        </select>

        <input type="text" v-model.number="order.zip"
        placeholder="Zip / Postal Code">
        <br>

        <input type="checkbox" id="gift" 
          value="true" v-model="order.gift"
          v-bind:true-value="order.sendGift"
          v-bind:false-value="order.dontSendGift">
        <label for="gift">Ship as gift?</label>

        <input type="radio" id="home" 
          v-bind:value="order.home" 
          v-model="order.method">
        <label for="home">Home</label>
        <input type="radio" id="business" 
          v-bind:value="order.business" 
          v-model="order.method">
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
      states: {
        AL: 'Alabama',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        method: 'Home address',
        business: 'Business address',
        home: 'Home address',
        gift: 'Send as a gift',
        sendGift: 'Send as a gift',
        dontSendGift: 'Do not send as a gift'
      },
      product: {
        id: 1,
        title: "Product 1",
        description:
          "<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit.",
        price: 99.99,
        // image: "./images/product-1.png"
        image: require("@/assets/images/product-1.png"),
        availableInventory: 10,
        rating: 3
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
    checkRating(n) {
      return this.product.rating - n >= 0;
    },
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
  background-color: whitesmoke;
  figure {
    margin: 0;
  }
  img {
    width: 100%;
  }
  .rating {
    color: #bbb;
  }
  .rating-active {
    color: #42b983;
  }
}
.cart {
  input, select, button {
    margin: 10px;
  }
}
</style>