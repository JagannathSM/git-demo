3. Find the product price which are not between 400 to 600

code --> db.collection.find({$or:[{product_price:{$lt:400}},{product_price:{$gt:600}}]})