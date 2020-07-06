Vue.component("product", {
  template: `<div class="product">
  <!-- product image -->
  <div class="product-image">
    <img v-bind:src="image" />
  </div>

  <!-- product info -->
  <div class="product-info">
    <h1>{{title}}</h1>
    <p v-if="inStock">In stock</p>
    <p v-else>Out of stock</p>

    <!-- list rendering -->
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>

    <!-- variants -->
    <div
      v-for="(variant, index) in variants"
      :key="variant.variantId"
      class="color-box"
      :style="{backgroundColor: variant.variantColor}"
      @mouseover="updateProduct(index)"
    ></div>

    <!-- cart -->
    <button
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton:!inStock}"
    >
      Add to Cart
    </button>
    <div class="cart">
      <p>Cart({{cart}})</p>
    </div>
  </div>
</div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      // console.log(index);
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + "  " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  },
});

let app = new Vue({
  el: "#app",
});
