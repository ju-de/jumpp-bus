import './theme';
import { router, route } from 'reapp-kit';

router(require,
  // creates dummy parent route
  route('app', '/', { dir: '' },
    route('landing',
      route('orders', route('order')),
      route('menu')
    ),
    route('register'),
    route('stats'),
    route('login')
  )
);
