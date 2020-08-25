// @flow
export type BookInformation = {
    volumeInfo: {
        imageLinks: {
            thumbnail: ?string
        },
        title: ?string,
        subtitle: ?string,
        authors: ?Array<string>,
        description: ?string,
    }
}