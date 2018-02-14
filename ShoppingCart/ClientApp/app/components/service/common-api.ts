import { autoinject, singleton } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { errorMessageDlg } from '../dialogs/errorMessageDlg';
import { DialogService } from 'aurelia-dialog';
import { Router } from "aurelia-router";
import { ShellConstants } from "./constants";




@autoinject()
@singleton()
export class CommonAPI {
    public dialog: DialogService;
    public router: Router;
    globalAddress: any;
    public myHeaders: any;
    public myGetHeader: any;
    public httpClient: any;


    constructor(http: HttpClient, _dialogService: DialogService, _router: Router, constants: ShellConstants) {
        var me = this;
       
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl(constants.ApiAddress)
                .withDefaults({
                    credentials: 'include',
                    headers: {
                        'Cookie': 'Cookies'
                    }
                })
                .withInterceptor({
                     responseError(response) {
                        console.log("interceptor");
                        console.log(response);
                        if (response.status != 200) {
                            //All felhantering för alla sidor.
                            //Dvs ingen sånt skall finnas i xxx- api.ts
                            //Ändra som man behagar
                            try {
                                if (response.status == 403) 
                                {
                                    me.convError(response).then(resp => me.handleServerError(resp));
                                } else {
                                    me.handleServerError(response);
                                }
                            } catch (ex) {
                                me.handleServerError(response);
                            }
                          
                        }
                        return response; // you can return a modified Response
                    },
                });;

        });
        this.httpClient = http;
        this.dialog = _dialogService;
        this.router = _router;


        this.myHeaders = new Headers();
        this.myHeaders.append('pragma', 'no-cache');
        this.myHeaders.append('cache-control', 'no-cache');

        this.myGetHeader = {
            method: 'GET',
            headers: this.myHeaders,
        };
    }

    private async convError(err:any ) {
        return err.json();
    }

    public handleServerError(resp: any ) {
        try {

           
                if (resp != null) {

                    if (resp.type == "UserInteractionFault") {
                        this.webConnectionError(resp, "Gick inte utföra", resp.message);
                        resp = null;
                    } else if (resp.type == "SystemExecutionFault") {
                        this.webConnectionError(resp, "System fel", resp.message);
                        resp = null;
                    } else if (resp.type == "NotAuthenticated") {
                        this.webConnectionError(resp, "Fel i kommunikation med servern", resp.status);
                        resp = null;
                    } else {
                        this.webConnectionError(resp, "Fel i kommunikation med servern " + resp.status, resp.statusText);
                        resp = null;
                    }
                }
           
            
            return resp;    
        } catch (ex) {
            this.webConnectionError(resp, "Oväntat fel", JSON.stringify(resp));
        }
       
    
    }


    private webConnectionError(error: any, title: string, message: string) {
        try {
                console.log(JSON.stringify(error));
                this.dialog.open({ viewModel: errorMessageDlg, model: [message, title] }).then(response => {});
        } catch (ex) {
            alert('Fel vid hämtning från servern! ' + JSON.stringify(ex));
        }
    }

    public webConnectionException(error: any) {
        try {
            console.log(JSON.stringify(error));
            let title = "Fel i kommunikation med servern";
            let message = error.status;
            this.dialog.open({ viewModel: errorMessageDlg, model: [message, title] }).then(response => { });
        } catch (ex) {
            alert('Fel vid hämtning från servern! ' + JSON.stringify(ex));
        }
    }
}