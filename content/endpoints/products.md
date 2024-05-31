# Products

**You can get all products by hitting the below endpoint**
```
https://nuxtapiservicesdocs.netlify.app/api/products
```


[method: GET]

-------

**You can get a specific product by hitting the below endpoint**
```
https://nuxtapiservicesdocs.netlify.app/api/products/[id]
```
- where id is the product id


[method: GET]

-------
**You can add a new product by hitting the below endpoint**
```
https://nuxtapiservicesdocs.netlify.app/api/products
```
[method: POST]


[and add the product object inside the body of the API request like this**
```
body: {
        title: "Your product title",
        body: "your product body"
    },
```

-------
**You can edit a product by hitting the below endpoint**
```
https://nuxtapiservicesdocs.netlify.app/api/products/[id]
```
- where id is the product id


[method: PUT]


[and add the product object inside the body of the API request like this**
```
body: {
        title: "Your product title",
        body: "your product body"
    },
```

-------
**You can get all categories by hitting the below endpoint**
```
https://nuxtapiservicesdocs.netlify.app/api/products/categories
```


[method: GET]

-------
**You can get a certain category by hitting the below endpoint**
```
https://nuxtapiservicesdocs.netlify.app/api/products/category/[type]
```


- where type is the category type


[method: GET]