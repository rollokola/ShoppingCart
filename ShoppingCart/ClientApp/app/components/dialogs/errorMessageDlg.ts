import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
//import * as $ from 'jquery';

@inject(DialogController)

export class errorMessageDlg {
    public message: string;
    public dialogHeader: string;
    public controller: DialogController;

    constructor(_controller: DialogController) {
        this.controller = _controller;
    }

    activate(_data: any) {
        this.message = _data[0];
        this.dialogHeader = _data[1];
    }

    attached() {
        //$(".OKButtonDlg").focus();
    }
}