exports.credentials = {
    InvalidTextCredential: {
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        name: 'Create Item',
        type: 'create',
        filePath: './test/config/pic.jpg',
        validation: true
    },
    InvalidPictureCredential: {
        text: 'text',
        name: 'Create Item',
        type: 'create',
        filePath: './test/config/pic-fail.jpg',
        validation: true
    },
    validCredential: {
        text: 'testing text area',
        name: 'Create Item',
        type: 'create',
        filePath: './test/config/pic.jpg',
        validation: false
    },
    updateCredential: {
        text: 'Will is hunted - update',
        name: 'Edit',
        type: 'update',
        filePath: './test/config/pic-update.jpg',
        validation: false
    },
    deleteItemCredential: {
        text: 'testing text area',
        name: 'Delete',
        type: 'delete'
    }

}