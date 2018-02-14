import { autoinject, singleton, Loader, TaskQueue } from "aurelia-framework";
//import { inject } from 'aurelia-framework';
//import { TaskQueue } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
//import { Product } from '../service/if'
import { ProductsApi as ProductsApi } from "../service/products-api";
var me: Shoppingcart;



export class Shoppingcart {
    //public inCartProducts: Contracts.Product[];
    //public notInCartProducts: Contracts.Product[];

    //private api: ProductsApi;
    //public router: Router;
    //public loader: Loader;
    //public isLoading: boolean;
    //public ds: any;


    //constructor(taskQueue: TaskQueue, router: Router, loader: Loader, api: ProductsApi) {
    //    me = this;
    //    me.api = api;
    //    me.loader = loader;
    //    me.router = router;
    //    me.isLoading = false;

    //    //http.fetch('api/SampleData/WeatherForecasts')
    //    //    .then(result => result.json() as Promise<WeatherForecast[]>)
    //    //    .then(data => {
    //    //        this.forecasts = data;
    //    //    });
    //}

    //public datasourceInCart = new kendo.data.DataSource({
    //    data: this.inCartProducts,
    //    transport: {
    //        read: (options: any) => {

    //            options.success(me.inCartProducts);
    //        }
    //    },
    //    pageSize: 14,
    //    schema: {
    //        model: {
    //            id: "id",
    //            fields: {
    //                'name': { type: "string" },
    //                'price': { type: "string" },
    //                'barcode': { type: "string" },
    //            }
    //        }
    //    }
    //});

    //public datasourceNotInCart = new kendo.data.DataSource({
    //    data: this.notInCartProducts,
    //    transport: {
    //        read: (options: any) => {

    //            options.success(me.notInCartProducts);
    //        }
    //    },
    //    pageSize: 14,
    //    schema: {
    //        model: {
    //            id: "id",
    //            fields: {
    //                'name': { type: "string" },
    //                'price': { type: "string" },
    //                'barcode': { type: "string" },
    //            }
    //        }
    //    }
    //});
}
