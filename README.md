             -------------   Description about application --------------

This is a NodeJs application that build with ExpressJs , Mongoose , Typescript And data storing in MongoDB. Here it provides product add on database with validated data by zod, All products get, product get by id, search by product name, update and delete product.

After this also can order product based on product ids. If there are no product with same id that won't be ordered. User can see their all orders. If there are no quantity that want a user to order it will be failed.If product quantity is 0 then inStock will be false.


             ----------- how to run the application locally -----------

1. At first clone my repository for get code of this application.
2. run - "npm install" for install all dependencies of the application.
3. Create a .env file with port-5000 and connect the application with mongodb.
4. At last run --"npm run start:dev" for run the application.
5. Now there are two api for the application---
(i)-->http://localhost:5000/api/products
(ii)-->http://localhost:5000/api/orders
6. By using two api user can post, get, search, update and delete product & user can order products and get their orders list.


                                    <---END--->