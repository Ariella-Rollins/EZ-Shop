import { useState } from "react"



export const Edit_product = () => {

    return (
        <div className="create-con">
            <form>
                <h1>Edit Product</h1>
                <input type="text" name="name" id="" placeholder="Product Name"/>
                <input type="number" name="price" id="" placeholder="Price"/>
                <textarea name="description" id="" placeholder="Description"/>
                <input type="number" name="stock" id="" placeholder="Number in stock"/>
                <select name="size">
                    <option value="">Pick a size</option>
                    <option value="extra-small">extra-small</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="extra-large">extra-large</option>
                </select>
                <select name="color">
                    <option value="">Pick a color</option>
                    <option value="white">white</option>
                    <option value="black">black</option>
                    <option value="grey">grey</option>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="purple">purple</option>
                    <option value="pink">pink</option>
                    <option value="brown">brown</option>
                    <option value="tan">tan</option>
                    <option value="multi-color">multi-color</option>
                </select>
                <input type="submit" value="Update" />
            </form>
        </div>
    )

}