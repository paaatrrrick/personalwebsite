export const GALLERY_ENABLED = process.env.REACT_APP_GALLERY === 'beta';

export const albums = [];

export const albumBySlug = (slug) => albums.find((album) => album.slug === slug) || null;

export const photoUrl = (photo, width) => `${photo.src}?w=${width}&fm=webp`;
