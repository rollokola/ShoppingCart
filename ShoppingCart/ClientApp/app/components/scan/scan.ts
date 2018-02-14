import { Router, RouterConfiguration } from 'aurelia-router';
import { ProductsApi as ProductsApi } from "../service/products-api";
import { autoinject, singleton, Loader, TaskQueue } from "aurelia-framework";
import { observable } from "aurelia-framework";
import { VideoInputDevice, BrowserQRCodeReader } from "zxing-typescript/src/browser/BrowserQRCodeReader"

var me: Scan;


@autoinject
@singleton()
export class Scan {
    public currentCount = 0;

   

    private api: ProductsApi;
    public router: Router;
    public loader: Loader;
    public isLoading: boolean;
    public ds: any;


    constructor(taskQueue: TaskQueue, router: Router, loader: Loader, api: ProductsApi) {
        me = this;
        me.api = api;
        me.loader = loader;
        me.router = router;
        me.isLoading = false;

     



    }

    public async checkReader() {

        //var codeReader: BrowserQRCodeReader = new BrowserQRCodeReader();
        //var input: any = codeReader.getVideoInputDevices();
        //if (input != null) {

        //}


    }

}
