import Product from "../models/product.models.js";
import { ProductSchema } from "../types.js";
import { deleteFile } from "../utils/file.js";


const getProducts = async (req, res, next) => {
  try {
    const total = await Product.countDocuments();
    const search = req.query.search || '';

    const products = await Product.find({
      name: { $regex: search, $options: 'i' }
    })

    if (!products || products.length === 0) {
      res.statusCode = 404;
      throw new Error('Products not found!');
    }

    res.status(200).json({
      products,
      total
    });
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      res.statusCode = 404;
      throw new Error('Product not found!');
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {

  const productPayload = req.body;
  const parsedPayload = ProductSchema.safeParse(productPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    const { name, image, description, brand, category, current_price,original_price, countInStock } =
      req.body;
    console.log(req.file);
    const product = new Product({
      user: req.user._id,
      name,
      image,
      description,
      brand,
      category,
      current_price,
      original_price,
      countInStock
    });
    const createdProduct = await product.save();

    res.status(200).json({ message: 'Product created', createdProduct });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const productPayload = req.body;
  const parsedPayload = ProductSchema.safeParse(productPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  try {
    const { name, image, description, brand, category, current_price,original_price, countInStock } =
      req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      res.statusCode = 404;
      throw new Error('Product not found!');
    }

    // Save the current image path before updating
    const previousImage = product.image;

    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.current_price = current_price || product.current_price;
    product.original_price = original_price || product.original_price;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();

    // Delete the previous image if it exists and if it's different from the new image
    if (previousImage && previousImage !== updatedProduct.image) {
      deleteFile(previousImage);
    }

    res.status(200).json({ message: 'Product updated', updatedProduct });
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      res.statusCode = 404;
      throw new Error('Product not found!');
    }
    await Product.deleteOne({ _id: product._id });
    // deleteFile(product.image); // Remove upload file

    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    next(error);
  }
};


export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};