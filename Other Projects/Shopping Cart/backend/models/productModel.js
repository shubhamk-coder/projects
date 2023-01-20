import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    Handle: { type: String },
    Title: { type: String },
    Body: { type: String },
    Vendor: { type: String },
    Type: { type: String },
    Tags: { type: String },
    Option1Name: { type: String },
    Option1Value: { type: String },
    Option2Name: { type: String },
    Option2Value: { type: String },
    Option3Name: { type: String },
    Option3Value: { type: String },
    SKU: { type: String },
    VariantGrams: { type: Number },
    VariantInventoryTracker: { type: String },
    Qty: { type: Number },
    VariantInventoryPolicy: { type: String },
    VariantFulfillmentService: { type: String },
    Price: { type: Number },
    VariantCompareAtPrice: { type: Number },
    Imgsrc: { type: String },
  },
  { timestamps: true }
);

const product = mongoose.model("Product", ProductSchema);
export default product;
