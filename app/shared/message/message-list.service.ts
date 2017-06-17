/**
 * Created by barney on 2017/6/10.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { NetworkService } from "../../service/main.service";

@Injectable()
export class MessageListService {

    constructor(private net: NetworkService) {}
    public getMessageList(params: any = {}): Observable<any> {
        return this.net.post("/app/buyer/message.htm", "我的消息列表", params);
    }
}
