//app view
export const app = {
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
            {
                shelfType: 'Books',
                shelfID: 0,
                shelfCreated: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                shelfContents: [
                    {
                        itemName: 'Do Androids Dream of Electric Sheep',
                        itemID: 0,
                        itemCreate: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                        // this will be a buffer later image url for now. 
                        imageBlob: 'https://upload.wikimedia.org/wikipedia/en/e/ee/DoAndroidsDream.png',
                        tags: [
                            'science fiction',
                        ],
                        otherProps: [
                            {
                                key: 'Author',
                                value: 'Philip K. Dick',
                            },
                            {
                                key: 'Published',
                                value: '1968',
                            },
                            {
                                key: 'Notes',
                                value: 'One of the greatest scifi books ever!',
                            },
                        ],
                    },
                    {
                        itemName: 'A Scanner Darkly',
                        itemID: 1,
                        itemCreate: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
                        // this will be a buffer later image url for now. 
                        imageBlob: 'https://en.wikipedia.org/wiki/A_Scanner_Darkly#/media/File:AScannerDarkly(1stEd).jpg',
                        tags: [
                            'science fiction',
                        ],
                        otherProps: [
                            {
                                key: 'Author',
                                value: 'Philip K. Dick',
                            },
                            {
                                key: 'Published',
                                value: '1977',
                            },
                            {
                                key: 'Notes',
                                value: 'Another one of the greatest scifi books ever!',
                            },
                        ],
                    },
                ],
            },

        ],
    },
};

//itemized
export const user = {
    userName: string,
    userEmail: string,
    userToken: string,
    userTemplates: [{templateItem = item }],
    bookcase: [{shelf}],
}

export const shelf = {
    shelfType: 'name for this shelf',
    shelfID: number,
    shelfCreated: date,
    shelfContents: [{items}],
}

export const item =  {
    itemName: string,
    itemID: number,
    itemCreated: date,
    imageBlob: buffer,
    tags: [tag],
    otherProps: [{prop}],
}

export const tag = 'string';

export const prop = {
    key: 'string',
    value: 'string'
}

export default {
    app,
    user,
    shelf,
    item,
    tag,
    prop,
};