import { MongoClient } from "mongodb";
import fsBase from "fs";
import path from "path";
const fs = fsBase.promises;

const execute = async () => {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017/node-course-db");
    const db = client.db();

    const newProductsBuffer = await fs.readFile(
        path.join(__dirname, "new-products.txt"), "utf-8"
    );

    const newProductsString = newProductsBuffer.toString();

    const productNames = newProductsString.split(",");

    for (let name of productNames) {
        await db.collection("products").insertOne({
            name
        });
    }

    console.log("Done!");

    client.close();
};

try {
    execute();
} catch (error) {
    console.log(error);
}
