export const getBookImageFromName = (name:string) => {
    switch (name){
        case 'A Game of Thrones':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIc-H9My9FtjycLDSrkfK_rv3vS-tGklB8XFQ4a1yc1WobpJeN'
        case 'A Clash of Kings':
            return 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRot6wPk2c2uPnS_OiRmLwfScI1VfpYGajMNYuCJIbV2HybbhRZ'
        case 'A Storm of Swords':
            return 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQif-dgqgWHLmlhsNGNPiLfLdsfrUcTYri1UMnE7mJvdoJ7TvNe'
        case 'A Feast for Crows':
            return 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgN2dROBqP5NylqM96-62oQnyR6wGTlGpkyDYdF07Rp7yJ_9-1'
        case 'A Dance with Dragons':
            return 'https://images-na.ssl-images-amazon.com/images/I/81WInI5d-TL.jpg'
        case 'The Hedge Knight':
            return 'https://awoiaf.westeros.org/images/thumb/0/05/Hedgeknight.jpg/396px-Hedgeknight.jpg'
        case 'The Sworn Sword':
            return 'https://img.livraddict.com/covers/163/163886/couv45354024.jpg'
        case 'The Mystery Knight':
            return 'https://images-na.ssl-images-amazon.com/images/I/A1nBtEbjqFL.jpg'
        case 'The Princess and the Queen':
            return 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440363536l/26152869._SY475_.jpg'
        case 'The Rogue Prince':
            return 'https://awoiaf.westeros.org/images/thumb/b/b3/Rogues_cover.jpg/300px-Rogues_cover.jpg'    
        default:
            return 'https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/black-bumpy-old-book-cover-texture-15-780x1078.jpg'
    }
}

export const getIdFromUrl = (url: string) => {
    // This is a trick to get the id from the url
    return parseInt(url.split('/').slice(-1)[0]); 
}