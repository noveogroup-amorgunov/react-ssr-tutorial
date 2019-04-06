import mock from './mock.json';
import { serializer as shoesSerializer } from '../shoes/service';

// Emulate api request
export const fetchCatalog = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(mock.sections[0].items.map(shoesSerializer));
    }, 500);
});
