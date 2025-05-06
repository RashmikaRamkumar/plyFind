import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        productId: "",
        name: "",
        category: "",
        images: [],
        dimensions: [],
        costPerUnitVolume: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("/api/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = async (e) => {
        const files = e.target.files;
        const uploadedImages = [];
        for (const file of files) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "your_cloudinary_preset");
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload",
                formData
            );
            uploadedImages.push(response.data.secure_url);
        }
        setFormData({ ...formData, images: uploadedImages });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`/api/products/${formData.productId}`, formData);
            } else {
                await axios.post("/api/products", formData);
            }
            fetchProducts();
            setFormData({
                productId: "",
                name: "",
                category: "",
                images: [],
                dimensions: [],
                costPerUnitVolume: "",
            });
            setIsEditing(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleEdit = (product) => {
        setFormData(product);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Product Management</h1>
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="Category"
                        className="border p-2 rounded"
                    />
                    <input
                        type="file"
                        multiple
                        onChange={handleImageUpload}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="Dimensions (comma-separated)"
                        className="border p-2 rounded"
                    />
                    <input
                        type="number"
                        name="costPerUnitVolume"
                        value={formData.costPerUnitVolume}
                        onChange={handleInputChange}
                        placeholder="Cost Per Unit Volume"
                        className="border p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isEditing ? "Update Product" : "Add Product"}
                </button>
            </form>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2">Images</th>
                        <th className="border border-gray-300 px-4 py-2">Dimensions</th>
                        <th className="border border-gray-300 px-4 py-2">Cost</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productId}>
                            <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="Product"
                                        className="w-16 h-16 object-cover"
                                    />
                                ))}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {product.dimensions.join(", ")}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {product.costPerUnitVolume}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product.productId)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagement;