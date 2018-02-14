//import { inject } from 'aurelia-framework';
//import { TaskQueue } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
//import { Product as Product } from  '../contracts/product';
import { ProductsApi as ProductsApi } from "../service/products-api";
import { autoinject, singleton, Loader, TaskQueue } from "aurelia-framework";
import { observable } from "aurelia-framework";

var me: Products;


@autoinject
@singleton()
export class Products {
    public products: Contract.Product[];

    private api: ProductsApi;
    public router: Router;
    public loader: Loader;
    public isLoading: boolean;
    public selItem: Contract.Product = <Contract.Product>{};
    public ds: any;


    constructor(taskQueue: TaskQueue, router: Router, loader: Loader, api: ProductsApi) {
        me = this;
        me.api = api;
        me.loader = loader;
        me.router = router;
        me.isLoading = false;
      
    }


    public datasource = new kendo.data.DataSource({
        data: this.products,
        transport: {
            read: (options: any) => {
                
                options.success(me.products);
            }
        },
        pageSize: 14,
        schema: {
            model: {
                id: "id",
                fields: {
                    'name': { type: "string" },
                    'price': { type: "string" },
                    'barcode': { type: "string" },
                }
            }
        }
    });


    public async Update() {
        if (!me) {
            me = this;
        }
        me.clearItem();
        me.isLoading = true;
        me.api.getAll().then(response => {
            me.products = response;
            if (me.products != null)
                if (me.products.length > 0) {
                    me.datasource.read();
                    
                }

            me.isLoading = false;
        });

    }


    rowSelected(e:any) {
        let grid = e.sender;
        let selectedRow = grid.select();
        let row = grid.dataItem(selectedRow);
        me.selItem = row;

        //if (me.selectedRow) {
        //    me.router.navigate("document/" + this.selectedRow.id + "/" + this.selectedRow.startingPage);
        //}
    }


    activate(parameters: any) {
       
        if (!me) {
            me = this;
        }
          me.Update();
    }
        

    saveItem() {
        if (me.selItem.id == 0) {
            me.api.create(me.selItem).then(response => {
                me.Update();
            });

        } else {
            me.api.update(me.selItem).then(response => {
                me.Update();
            });
        }
       
    }

    
    clearItem() {
        me.selItem = <Contract.Product>{};
        me.selItem.id = 0;
        me.selItem.name = '';
        me.selItem.price = '';
        me.selItem.barcode = '';
    }
    removeItem() {
        me.api.remove(me.selItem.id).then(response => {
            me.Update();
        });
    }
  

 

}

