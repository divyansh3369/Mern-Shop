
import { axiosi } from "../../config/axios";

export const addProduct = async (data) => {
    try {
        const res = await axiosi.post("/products", data);
        return res.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const fetchProducts = async (filters) => {
    const params = new URLSearchParams();

    if (filters.brand) {
        filters.brand.forEach((brand) => {
            params.append("brand", brand);
        });
    }

    if (filters.category) {
        filters.category.forEach((category) => {
            params.append("category", category);
        });
    }

    if (filters.search?.trim()) {
        params.set("search", filters.search.trim());
    }

    if (filters.pagination) {
        params.set("page", filters.pagination.page);
        params.set("limit", filters.pagination.limit);
    }

    if (filters.sort) {
        params.set("sort", filters.sort.sort);
        params.set("order", filters.sort.order);
    }

    if (filters.user) {
        params.set("user", filters.user);
    }

    try {
        const res = await axiosi.get(`/products?${params.toString()}`);
        const totalResults = res.headers["x-total-count"];

        return {
            data: res.data,
            totalResults: totalResults
        };
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const res = await axiosi.get(`/products/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const updateProductById = async (update) => {
    try {
        const res = await axiosi.patch(`/products/${update._id}`, update);
        return res.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const undeleteProductById = async (id) => {
    try {
        const res = await axiosi.patch(`/products/undelete/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const deleteProductById = async (id) => {
    try {
        const res = await axiosi.delete(`/products/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};
