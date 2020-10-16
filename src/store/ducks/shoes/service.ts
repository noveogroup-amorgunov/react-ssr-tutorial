import { timeout } from '../timeoutHelper';
// @ts-ignore
import mock from './mock.json';

export const serializer = (data: any) => {
    const [, image] = (data.spriteSheet || '').match(/img0=([^&]+)&?/);
    const slug = data.slug || (data.pdpUrl.split('/') || ['']).pop();

    return {
        slug,
        image: `/images/${image.replace('/', '_')}.jpg`,
        images: data.images,
        title: data.title,
        subtitle: data.subtitle,
        price: data.localPrice,
        description: data.description,
        url: `/sneakers/${slug}`,
    };
};

// Emulate api request
export const fetchShoes = (slug: string) =>
    timeout(500).then(() => serializer({ ...mock, slug }));
