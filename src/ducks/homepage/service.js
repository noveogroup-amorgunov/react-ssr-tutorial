import mock from './mock.json';
import { serializer as shoesSerializer } from '../shoes/service';

const { items } = mock.sections[0];

// Emulate api request
export const fetchHomepage = () => new Promise(resolve => setTimeout(() => {
    resolve({
        newest: items.slice(0, 6).map(shoesSerializer),
        popular: items.slice(6, 9).map(shoesSerializer)
    });
}, 500));
