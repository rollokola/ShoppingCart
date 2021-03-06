﻿import { autoinject, singleton } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
////import { errorMessageDlg } from '../dialogs/errorMessageDlg';
import { DialogService } from 'aurelia-dialog';
import { Router } from "aurelia-router";
import { ShellConstants } from "./constants";
import { CommonAPI as CommonAPI } from './common-api';


@autoinject()
@singleton()
export class ProductsApi {
    //public dialog: DialogService;
    public router: Router;
    globalAddress: any;
    private common: CommonAPI;
  //  constructor(private http: HttpClient, _dialogService: DialogService, _router: Router, constants: ShellConstants) {
    constructor(private http: HttpClient, _dialogService: DialogService,  _router: Router, constants: ShellConstants) {
        this.common = new CommonAPI(http, _dialogService, _router, constants);
        var me = this;
        
        //http.configure(config => {
        //    config
        //        .useStandardConfiguration()
        //        .withBaseUrl(constants.ApiAddress)
        //        //.withDefaults({
        //        //    credentials: 'include',
        //        //    headers: {
        //        //        'Cookie': 'MyCookieMiddlewareInstance'
        //        //    }
        //        //})
        //        .withInterceptor({
        //            responseError(response) {
        //                console.log("interceptor");
        //                console.log(response);
        //                if (response.status != 200) {
        //                  //  me.router.navigateToRoute('')
        //                }
        //                return response; // you can return a modified Response
        //            },
        //        });;

        //});
        this.http = http;
        //this.dialog = _dialogService;
        this.router = _router;
    }

    public async getAll() {
        return await this.http.fetch('Products/GetAll', this.common.myGetHeader)
            .then(response => response.json())
            .catch(error => {
                this.webConnectionError(error);
            });
    }

    public async get(id:string) {
        return await this.http.fetch("Products/Get/" + id, this.common.myGetHeader)
        .then(response => response.json())
        .catch(error => {
            this.webConnectionError(error);
        });


    }


 

    public async create(item:any) {
        await this.http.fetch("Products/Create",
            {
                method: "post",
                body: json(item)
            });
    }

    public async update(item: any) {
        await this.http.fetch("Products/Update",
            {
                method: "post",
                body: json(item)
            });
    }

    public async remove(id: any) {
        await this.http.fetch("Products/Remove/" + id);
    }


    private webConnectionError(error: any) {
        console.log(JSON.stringify(error));
        try {
            var errorInfo = error;
            let message: string;
            let title: string = "Fel i kommunikation med servern";
            message = errorInfo.status;
            alert('error: ' + errorInfo.message);
            //if (errorInfo.type == "UserInteractionFault") {
            //    this.dialog.open({ viewModel: errorMessageDlg, model: [message, title] }).then(response => {});
            //    return error;
            //} else if (errorInfo.type == "NotAuthenticated") {
            //    this.dialog.open({ viewModel: errorMessageDlg, model: [message, title] }).then(response => {});
            //} else {
            //    var msg = message + " | " + errorInfo.statusText + " | " + errorInfo.url;
            //    this.dialog.open({ viewModel: errorMessageDlg, model: [msg, title] }).then(response => {}).then(() => {
            //        //location.reload();
            //    });
            //    return error;
            //}
        } catch (ex) {
            alert('Fel vid hämtning från servern! ' + JSON.stringify(ex));
        }
    }
}
