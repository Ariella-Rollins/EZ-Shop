import { useState } from "react"
import { useLogin } from "../context/userContext"
import { createProduct } from "../services/product.service"



export const Add_product = () => {

    const { login: loginClient, isLoggedIn, logout:userLogout, setLoggedInData, loggedInData } = useLogin()
    const [errors, setErrors] = useState(null)

    function addProduct(e) {
        e.preventDefault()
        const {name, price, description, stock, color, size, category, pic1, pic2} = e.target
        const data = {
            creator_id: loggedInData._id,
            name: name.value,
            price: price.value,
            description: description.value,
            stock: stock.value,
            color: color.value,
            category: category.value,
            pic1: pic1.value,
            pic2: pic2.value
        }
        createProduct(data)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                if (err.response?.data?.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    }

    return (
        <div className="create-con">
            <form>
                <h1>Create Product</h1>
                <div className="inputs">
                    <div className="input1">
                        {errors?.name && <p className="errors">{errors.name.message}</p>}
                        <input type="text" name="name" id="" placeholder="Product Name"/>
                        {errors?.price && <p className="errors">{errors.price.message}</p>}
                        <input type="number" name="price" id="" placeholder="Price"/>
                        {errors?.description && <p className="errors">{errors.description.message}</p>}
                        <textarea name="description" id="" placeholder="Description"/>
                        {errors?.stock && <p className="errors">{errors.stock.message}</p>}
                        <input type="number" name="stock" id="" min="1" max="500" placeholder="Number in stock"/>
                    </div>
                    <div className="input2">
                    {errors?.size && <p className="errors">{errors.size.message}</p>}
                        <select name="size">
                            <option value="">Pick a size</option>
                            <option value="extra-small">Extra-small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra-large">Extra-large</option>
                        </select>
                        {errors?.color && <p className="errors">{errors.color.message}</p>}
                        <select name="color">
                            <option value="">Pick a color</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="grey">Grey</option>
                            <option value="red">Red</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="purple">Purple</option>
                            <option value="pink">Pink</option>
                            <option value="brown">Brown</option>
                            <option value="tan">Tan</option>
                            <option value="multi-color">Multi-color</option>
                        </select>
                        {errors?.category && <p className="errors">{errors.category.message}</p>}
                        <select name="category">
                            <option value="">Pick category</option>
                            <option value="clothes">Clothes</option>
                            <option value="accessories">Accessories</option>
                            <option value="beauty/health">Beauty/health</option>
                            <option value="home">Home</option>
                            <option value="electronics">Electronics</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="toys/games">Toys/games</option>
                            <option value="pets">Pets</option>
                            <option value="outdoors">Outdoors</option>
                            <option value="other">Other</option>
                        </select>
                        {errors?.pic1 && <p className="errors">{errors.pic1.message}</p>}
                        <input type="text" name="pic1" id="" placeholder="Image url (optional)" />
                        {errors?.pic2 && <p className="errors">{errors.pic2.message}</p>}
                        <input type="text" name="pic2" id="" placeholder="Second image url (optional)" />
                    </div>
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    )

}