const {MongoClient}=require ('mongodb');

//const user="orlandoabta";
//const password="kWGEyxNd7Ioc8gj4"

//coneccion uri
const uri="mongodb+srv://orlandoabta:kWGEyxNd7Ioc8gj4@cluster0.98szv.mongodb.net/"
const client = new MongoClient(uri);

async function run() {
    try {
      await client.connect();
      const db = client.db('blog');
      const collection = db.collection('articulos');
  
      // Find the first document in the collection
      const articulo = await db.collection('articulos').find();
      console.log(articulo.titulo);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }
  run().catch(console.error);