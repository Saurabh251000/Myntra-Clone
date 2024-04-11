import mongoose from 'mongoose';

// Define the schema for products
const productSchema = new mongoose.Schema(
  {
    // Reference to the user who created the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    // Name of the product
    name: {
      type: String,
      required: true
    },
    // Image URL of the product
    image: {
      type: String,
      required: true
    },
    // Description of the product
    description: {
      type: String,
      required: true
    },
    // Brand of the product
    brand: {
      type: String,
      required: true
    },
    // Category of the product
    category: {
      type: String,
      required: true
    },
    // current Price of the product
    current_price: {
      type: Number,
      required: true,
      default: 0
    },
    // original price of the product
    original_price: {
      type: Number,
      required: true,
      default: 0
    },
    // Quantity available in stock
    countInStock: {
      type: Number,
      required: true,
      default: 0
    },
  },
  { timestamps: true }
);

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Export the Product model
export default Product;