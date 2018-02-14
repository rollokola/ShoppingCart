import { autoinject, singleton, Loader, TaskQueue } from "aurelia-framework";
//import { inject } from 'aurelia-framework';
//import { TaskQueue } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
//import { ShoppingList } from '../contract/ShoppingList';
//import { ShoppingListItem } from '../contract/ShoppingListItem';
import { ShoppingListApi as ShoppingListApi } from "../service/shoppinglist-api";
var me: Shopinglists;


@autoinject
@singleton()
export class Shopinglists {
    //public sList: Contracts.ShoppingList[];

    //public toPickProduct: Contracts.ShoppingListItem[];
    //public pickedProduct: Contracts.ShoppingListItem[];

    //private api: ShoppingListApi;
    //public router: Router;
    //public loader: Loader;
    //public isLoading: boolean;
    //public selItem: Contracts.ShoppingList;
    //public ds: any;


    //constructor(taskQueue: TaskQueue, router: Router, loader: Loader, api: ShoppingListApi) {
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


    //public datasource = new kendo.data.DataSource({
    //    data: this.sList,
    //    transport: {
    //        read: (options: any) => {
                
    //            options.success(me.toPickProduct);
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


    //public async Update() {
    //    if (!me) {
    //        me = this;
    //    }
    //    me.clearItem();
    //    me.isLoading = true;
    //    me.api.getAll().then(response => {
    //        me.sList = response;
    //      //  me.toPickProduct = me.sList[0].shoppingListItem;
    //        if (me.sList != null)
    //            if (me.sList.length > 0) {
    //                me.datasource.read();
                    
    //            }

    //        me.isLoading = false;
    //    });

    //}


    //rowSelected(e:any) {
    //    let grid = e.sender;
    //    let selectedRow = grid.select();
    //    let row = grid.dataItem(selectedRow);
    //    me.selItem = row;

    //    //if (me.selectedRow) {
    //    //    me.router.navigate("document/" + this.selectedRow.id + "/" + this.selectedRow.startingPage);
    //    //}
    //}


    //activate(parameters: any) {
       
    //    if (!me) {
    //        me = this;
    //    }
    //      me.Update();
    //}
        

    //saveItem() {
    //    if (me.selItem.id == 0) {
    //        me.api.create(me.selItem).then(response => {
    //            me.Update();
    //        });

    //    } else {
    //        me.api.update(me.selItem).then(response => {
    //            me.Update();
    //        });
    //    }
       
    //}

    
    //clearItem() {
    //    me.selItem = new ShoppingList;
    //    me.selItem.id = 0;
    //    me.selItem.name = '';
     
    //}
    //removeItem() {
    //    me.api.remove(me.selItem.id).then(response => {
    //        me.Update();
    //    });
    //}
  

 

}

