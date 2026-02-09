const express = require('express');
const getDB = require('../db');
const { ObjectId } = require('mongodb')

const router = express.Router();

// create
router.post("/", async (req, res, next) => {
    try {
        const db = await getDB();
        const result = await db.collection('users').insertOne(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
})

// read
router.get("/", async (req, res, next) => {
    try {
        const db = await getDB();
        const users = await db.collection("users").find().toArray();
        res.json(users);
    } catch (error) {
        next(error);
    }
})

// update
router.put("/:id", async (req, res, next) => {
    try {
        const db = await getDB();
        await db.collection("users").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        )

        res.send("Updated");
    } catch (error) {
        next(error);
    }
})

// delete
router.delete("/:id", async (req, res, next) => {
    try {
        const db = await getDB();

        await db.collection("users").deleteOne(
            { _id: new ObjectId(req.params.id) }
        )

        res.send("deleted");
    } catch (error) {
        next(error);
    }
})

module.exports = router;