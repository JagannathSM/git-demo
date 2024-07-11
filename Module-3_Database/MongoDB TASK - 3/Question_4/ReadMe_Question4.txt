4. List the four product which are greater than 500 in price

code --> db.collection.find({product_price:{$gt:500}}).limit(4)

NOTE : Output got only 3 products, only 3 products which are greater than 500 product_price.