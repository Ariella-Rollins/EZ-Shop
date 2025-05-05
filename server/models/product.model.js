import mongoose from "mongoose"

// Define a schema for our product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'All fields required'],
        minLength: [5, `product name must be at least 5 characters!`],
        maxLength: [30, `product name cannnot exceed 30 characters!`],
    },
    creator_id: {
        type: String,
        required: [false]
    },
    pic:{
        type: String,
        required: [false]
    },
    description: {
        type: String,
        required: true,
        minLength: [5, `Description must be at least 5 characters!`],
        maxLength: [30, `Description cannnot exceed 30 characters!`],
      },
      price: {
        type: Number,
        required: [true, 'Please type number for price.'],
      },
      
      category: {
        type: String,
        required: [true,'Please select Category.'],
        default:'Electronics',
        enum:['Electronics','Fashion','Home and Kitchen','Beauty and Personal Care',
            'Sports and Outdoors','Toys and Games','Books and Media','Health and Wellness','Baby and Kids','Pet Care']
      },
    //   subCategory: {
    //     type: String,
    //     required: true,
    //   },
      sizes: {
        type:String,
            required: [true,'Please select size from combobox.'],
            default:'Small',
            enum:['Small','Medium','Large','XL','XLL']
      },
      bestSeller: {
        type: Boolean,
      },
      date: {
        type: Number,
        required: true,
      },
    
    
}, { timestamps: true });


// Create the product model from the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
