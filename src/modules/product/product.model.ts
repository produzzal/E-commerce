import { Schema, model } from 'mongoose';

// Define the Variant schema
const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the Inventory schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the product schema
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

//Query middleware
productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

productSchema.post('save', function () {});

export const Product = model<TProduct>('Product', productSchema);
