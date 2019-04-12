import { serializer as shoesSerializer } from '../shoes/service';

const timeout = ms => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

// Emulate api request
export const fetchHomepage = () => timeout(500)
    .then(() => import('./mock.json'))
    .then(loaded => ({
        newest: loaded.sections[0].items.slice(0, 6).map(shoesSerializer),
        popular: loaded.sections[0].items.slice(6, 9).map(shoesSerializer)
    }));
