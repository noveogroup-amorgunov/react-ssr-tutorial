import { serializer as shoesSerializer } from '../shoes/service';
import { timeout } from '../timeoutHelper';

// Emulate api request
export const fetchCatalog = () =>
    timeout(500)
        .then(() => import('./mock.json'))
        .then(loaded =>
            loaded.sections[0].items.slice(30).map(shoesSerializer)
        );
