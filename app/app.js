import './theme';
import { router, route } from 'reapp-kit';

router(require,
  // creates dummy parent route
  route('app', '/', { dir: '' },
    route('business'),
    route('customer'))
);
