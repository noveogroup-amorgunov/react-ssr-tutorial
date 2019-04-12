import { serializer as shoesSerializer } from '../shoes/service';

const timeout = ms => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

// Emulate api request
export const fetchCatalog = () => timeout(500)
    .then(() => import('./mock.json'))
    .then(loaded => loaded.sections[0].items.slice(30).map(shoesSerializer));
