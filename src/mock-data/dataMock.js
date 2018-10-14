//app view
const app = {
    globalTemplates: [
        {
            shelfType: 'makeNewTemplate',
        },
        {
            shelfType: 'movietemplate',
        },
        {
            shelfType: 'bookTemplate',
        },
    ],
    user: {
        userName: 'seymourbuts',
        userEmail: 'seymourbuts@aol.com',
        userToken: '01234567', 
        userTemplates: [
            {templateItem = item },
        ],
        bookcase: [
            {
                shelfType: 'Movies',
                shelfID: 0,
                shelfCreated: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                shelfContents: [
                    {
                        itemName: 'Night of the Living Dead',
                        itemID: 0,
                        itemCreate: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                        // this will be a buffer later image url for now. 
                        imageBlob: 'https://m.media-amazon.com/images/M/MV5BMjRjZjE3OGUtYzIyYy00NGRkLTliYTUtYmI1ZjQ3YmZjYTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX656_AL_.jpg',
                        tags: [
                            'horror',
                        ],
                        otherProps: [
                            {
                                key: 'Director',
                                value: 'George A. Romero',
                            },
                            {
                                key: 'Release',
                                value: '1968',
                            },
                            {
                                key: 'Notes',
                                value: 'One of the greatest zombie films ever!',
                            },
                        ],
                    },
                ],
            },
            {
                shelfType: 'Movies',
                shelfID: 0,
                shelfCreated: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                shelfContents: [
                    {
                        itemName: 'Dawn of the dead',
                        itemID: 1,
                        itemCreate: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                        // this will be a buffer later image url for now. 
                        imageBlob: 'https://m.media-amazon.com/images/M/MV5BMzc1YTIyNjctYzhlNy00ZmYzLWI2ZWQtMzk4MmQwYzA0NGQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
                        tags: [
                            'horror',
                        ],
                        otherProps: [
                            {
                                key: 'Director',
                                value: 'George A. Romero',
                            },
                            {
                                key: 'Release',
                                value: '1978',
                            },
                            {
                                key: 'Notes',
                                value: 'Another one of the greatest zombie films ever!',
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

//itemized
user = {
    userName: string,
    userEmail: string,
    userToken: string, 
    userTemplates: [{templateItem = item }],
    bookcase: [{shelf}],
}

shelf = { 
    shelfType: 'name for this shelf',
    shelfID: number,
    shelfCreated: date,
    shelfContents: [{items}],
}

item =  {
    itemName: string,
    itemID: number,
    itemCreated: date,
    imageBlob: buffer,
    tags: [tag],
    otherProps: [{prop}],
}

tag = 'string';

prop = {
    key: 'string',
    value: 'string'
}

export default app;