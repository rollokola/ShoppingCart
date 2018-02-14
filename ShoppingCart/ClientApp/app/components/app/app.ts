import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'star-empty' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'products',
            name: 'products',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../products/products'),
            nav: true,
            title: 'Products'
       //     }, {
  //              route: 'shoppingcart',
   //             name: 'shoppingcart',
 //               settings: { icon: 'shopping-cart' },
  //              moduleId: PLATFORM.moduleName('../shoppingcart/shoppingcart'),
  //              nav: true,
   //             title: 'Shopping Cart'
            }, {
            route: 'scan',
            name: 'scan',
            settings: { icon: 'barcode' },
            moduleId: PLATFORM.moduleName('../scan/scan'),
            nav: true,
            title: 'Scan'
        }]);

        this.router = router;
    }
}
