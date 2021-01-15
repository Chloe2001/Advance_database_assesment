const MongoClient = require("mongodb").MongoClient;
const fs = require ("fs").promises;


const url = "mongodb+srv://Chloe2001:Onedirection2001@cluster0.lhz1z.mongodb.net/test"
const dbName = "Mental_health";
const collectionName ="Health";
const fileName = "Health.json";
const client = new MongoClient(url, {userNewurlParser:true});

app.listen(port,()=> {
    console.log('Example http://localhost:${port}');
})



 async function main() {
     try{
         const start = Date.now();
         await client.comnect();
         console.log("connected to database server");
         const db = client.db(dbName);
         const collection = db.collection(collectionName);

         const mental_healthData = await fs.readFile(fileName,"utf-8")
    
        await collection.insertMany(JSON.parse(mental_healthData));
        const count = await collection.find().count;

        console.log('there are ${commaNumber(count)} records this took ${Date.now() - start) /1000} seconds to execute');

         process.exit();
     } catch (error) {

     }
 }