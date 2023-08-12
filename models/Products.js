import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema);

export default ProductModel;
