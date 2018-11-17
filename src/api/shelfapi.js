const http = require('https');
const fs = require('fs');
const host = 'localhost'
const port = 8888
const defaultOptions = {
    host,
    port,
    ca: fs.readFileSync('server.cert')
}

/**
 * All functions return a Promise.
 * - Then and catch must be used to get returned data.
 * 
 * All functions require a "payload" object of user data.
 * 
 * input { userToken }
 * return { bookcase:[{shelfType, shelfID, shelfCreated},...]}
 * getUserShelves()
 * 
 * input { userToken, shelfType, shelfID, shelfCreated }
 * return status(200) { success: true, shelfID }
 * updateShelf(), addShelf()
 * 
 * input { userToken, shelfType, shelfID }
 * return status(200) { success: true }
 * removeShelf()
 * 
 * input { userToken, shelfID }
 * return { shelfContents: [{itemName,itemID,imageBlob,itemCreated,tags},...]}
 * getItems()
 * 
 * input { userToken, shelfID, itemName, itemID, itemCreated, tags}
 * return status(200) {success:true,itemID}
 * updateItem(), addItem()
 * 
 * { userToken, shelfID, itemID, imageBlob }
 *  return status(200) {success:true}
 * updateItemImage()
 * 
 * { userToken, shelfID, itemName, itemID }
 * return status(200) {success:true}
 * removeItem()
 * 
 * { userToken, itemID }
 * return status(200) {otherProps:[]}
 * getItemDescript()
 * 
 * { userToken, itemID, otherProps }
 * return status(200) {success:true}
 * updateItemDescript()
 */

 /* 
    requestDataParse() Generic code to parse raw data into JSON string
    all promises get resolved here.
    
    'resolve' will return valid requests from server to 'then'.
    but that doesnt mean the action succeeded. An object will be returned.
    if object containes { error } the request has failed.

    http status codes could be used to signify different errors.*
    * future coding. 

    'reject' will return failed requests if there is no connection to server. 
 */
const requestDataParse = (options, resolve, reject) => { 
    return http.request(options, (res) =>{
        let body = '';
        res.on('data',(d)=>{
            body += d;
        });
        res.on('end', ()=>{
            resolve(JSON.parse(body)); //returned to 'then'
        });
        
    })
}

const getUserShelves = ( payload ) => {
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'GET',
            path: '/shelves/getUserShelves',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            } 
        }
        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.end();
    })
}

const updateShelf = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/upsertShelf',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })

}
// update and add are use the same endpoint upserting in cassandra
const addShelf = updateShelf;

const removeShelf = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/removeShelf',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

const getItems = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/getItems',
            headers: {
                'Authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            },
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

const updateItem = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/upsertItem',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

// update and add are use the same endpoint upserting in cassandra
const addItem = updateItem;

const updateItemImage = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/upsertImageBlob',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

const removeItem = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/removeItem',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

const getItemDescript = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/getItemDescript',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

//update works as a upsert. send all descriptions
const updateItemDescript = ( payload ) => {
    const data = JSON.stringify(payload);
    return new Promise((resolve,reject)=> {
        const options = {
            ...defaultOptions,
            method: 'POST',
            path: '/shelves/updateItemDescript',
            headers: {
                'authorization': 'Bearer ' + payload.userToken,
                'Content-Type': 'application/json'
            }
        }

        const req = requestDataParse(options,resolve,reject);
        req.on('error',(err)=>reject(err)); //returned to 'catch'
        req.write(data);
        req.end();
    })
}

const api = {
    getUserShelves,
    updateShelf,
    addShelf,
    removeShelf,
    getItems,
    updateItem,
    addItem,
    updateItemImage,
    removeItem,
    getItemDescript,
    updateItemDescript
}

module.exports = api;