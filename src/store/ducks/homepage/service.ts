import { serializer as shoesSerializer } from '../shoes/service';
import { timeout } from '../timeoutHelper';

// Emulate api request
export const fetchHomepage = () =>
    timeout(500)
        .then(() => import('./mock.json'))
        .then(loaded => ({
            newest: loaded.sections[0].items.slice(0, 6).map(shoesSerializer),
            popular: loaded.sections[0].items.slice(6, 9).map(shoesSerializer),
        }));
