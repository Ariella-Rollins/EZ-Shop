import { useState } from "react"



export const Add_product = () => {

    return (
        <div className="create-con">
            <form>
                <h1>Create Product</h1>
                <div className="inputs">
                    <div className="input1">
                        <input type="text" name="name" id="" placeholder="Product Name"/>
                        <input type="number" name="price" id="" placeholder="Price"/>
                        <textarea name="description" id="" placeholder="Description"/>
                        <input type="number" name="stock" id="" placeholder="Number in stock"/>
                    </div>
                    <div className="input2">
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
                        <select name="category">
                            <option value="">Pick category</option>
                            <option value="clothes">clothes</option>
                            <option value="accessories">accessories</option>
                            <option value="beauty/health">beauty/health</option>
                            <option value="home">home</option>
                            <option value="electronics">electronics</option>
                            <option value="kitchen">kitchen</option>
                            <option value="toys/games">toys/games</option>
                            <option value="pets">pets</option>
                            <option value="outdoors">outdoors</option>
                            <option value="other">other</option>
                        </select>
                        <input type="text" name="url" id="" placeholder="Image url (optional)" />
                        <input type="text" name="url" id="" placeholder="Second image url (optional)" />
                    </div>
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    )

}