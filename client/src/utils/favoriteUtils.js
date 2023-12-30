const favoriteUtils = {
    check: ({ listFavorites, mediaId }) => listFavorites && listFavorites.find( e => e.media.toString() === mediaId.toString()) !== undefined
};
export default favoriteUtils;