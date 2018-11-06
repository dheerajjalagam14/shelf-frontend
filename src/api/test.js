const shelfapi = require("./shelfapi.js");

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGltIiwiaWF0IjoxNTQwNjc2MTAxLCJleHAiOjE1NDA3NjI1MDF9.T9BLwu0ruPcRA16d8aBoUDAW0WIFwLU6zJRjdeByfjE'
const shelfType = 'Spoons'
const shelfID = '63914078-a04f-4da3-a765-c999b4d24680'
const shelfCreated = '2018-10-10 19:48:56.321+0000 '
const itemID = 'f6af2778-17e6-437c-928c-0a6caadf2a80'
const itemCreated = '2018-10-10 19:43:14.311+0000'
const itemName = 'Silver Spoon'
const tags = ['Silver', 'Victorian']

const shelfitem = { 
    userToken,
    shelfType,
    shelfID,
    shelfCreated,
    itemID,
    itemCreated,
    itemName,
    tags
}


shelfapi.getUserShelves( shelfitem )
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
shelfapi.getItems( shelfitem )
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})

/**
 * All functions return a Promise.
 * - Then and catch must be used to get data returned.
 * 
 * All functions require a "payload" object of user data.
 * 
 * { userToken }
 * getUserShelves()
 * 
 * { userToken, shelfType, shelfID, shelfCreated }
 * updateShelf(), addShelf()
 * 
 * { userToken, shelfType, shelfID }
 * removeShelf()
 * 
 * { userToken, shelfID }
 * getItems()
 * 
 * { userToken, shelfID, itemName, itemID, itemCreated, tags}
 * updateItem(), addItem()
 * 
 * { userToken, shelfID, itemID, imageBlob }
 * updateItemImage()
 * 
 * { userToken, shelfID, itemName, itemID }
 * removeItem()
 * 
 * { userToken, itemID }
 * getItemDescript()
 * 
 * { userToken, itemID, otherProps }
 * updateItemDescript()
 */