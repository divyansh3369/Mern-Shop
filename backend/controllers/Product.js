
const { Schema, default: mongoose } = require("mongoose");
const Product = require("../models/Product");

exports.create = async (req, res) => {
    try {
        const created = new Product(req.body);
        await created.save();
        res.status(201).json(created);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error adding product, please try again later"
        });
    }
};

exports.getAll = async (req, res) => {
    try {
        const filter = {};
        const sort = {};
        let skip = 0;
        let limit = 0;

        if (req.query.brand) {
            filter.brand = {
                $in: Array.isArray(req.query.brand)
                    ? req.query.brand
                    : [req.query.brand]
            };
        }

        if (req.query.category) {
            filter.category = {
                $in: Array.isArray(req.query.category)
                    ? req.query.category
                    : [req.query.category]
            };
        }

        if (req.query.user) {
            filter.isDeleted = false;
        }

        // Search by product title or description
        if (req.query.search && req.query.search.trim()) {
            const searchTerm = req.query.search.trim();
            const escapedSearch = searchTerm.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

            filter.$or = [
                { title: { $regex: escapedSearch, $options: "i" } },
                { description: { $regex: escapedSearch, $options: "i" } }
            ];
        }

        if (req.query.sort) {
            sort[req.query.sort] =
                req.query.order
                    ? (req.query.order === "asc" ? 1 : -1)
                    : 1;
        }

        if (req.query.page && req.query.limit) {
            const pageSize = Math.max(1, Number(req.query.limit) || 1);
            const page = Math.max(1, Number(req.query.page) || 1);

            skip = pageSize * (page - 1);
            limit = pageSize;
        }

        const totalDocs = await Product.countDocuments(filter).exec();

        let query = Product.find(filter)
            .sort(sort)
            .populate("brand")
            .populate("category")
            .skip(skip);

        if (limit > 0) {
            query = query.limit(limit);
        }

        const results = await query.exec();

        res.set("X-Total-Count", totalDocs);
        res.status(200).json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching products, please try again later"
        });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findById(id)
            .populate("brand")
            .populate("category");

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error getting product details, please try again later"
        });
    }
};

exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error updating product, please try again later"
        });
    }
};

exports.undeleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const unDeleted = await Product.findByIdAndUpdate(
            id,
            { isDeleted: false },
            { new: true }
        ).populate("brand");

        res.status(200).json(unDeleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error restoring product, please try again later"
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndUpdate(
            id,
            { isDeleted: true },
            { new: true }
        ).populate("brand");

        res.status(200).json(deleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error deleting product, please try again later"
        });
    }
};
