import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery";

@Injectable()
export class GroceryListService {

    constructor(private http: Http) {}

    add(name: string) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token); // 授权令牌
        headers.append("Content-Type", "application/json");
        const options = { headers };
        const url = Config.apiUrl + "Groceries";
        const params = {
            Name: name,
        };
        const body = JSON.stringify(params);
        return this.http.post(url, body, options)
        .map(res => res.json())
        .map(json => {
            return new Grocery(json.Result.Id, name);
        })
        .catch(this.handleErrors);
    }

    load() {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token); // 授权令牌

        const options = { headers: headers };
        const url = Config.apiUrl + "Groceries";
        return this.http.get(url, options)
        .map(response => response.json())
        .map(json => {
            let groceryList:Array<Grocery> = [];
            json.Result.forEach((grocery) => {
              groceryList.push(new Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
        .catch(this.handleErrors);
    }

    private handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
