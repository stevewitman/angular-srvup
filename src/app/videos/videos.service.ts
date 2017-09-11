import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'assets/json/videos.json';

@Injectable()
export class VideoService {
    constructor(private http: Http) {}

    list() {
        return this.http.get(endpoint)
            .map(response => response.json())
            .catch(this.handleError)
    }


    get(slug) {
        return this.http.get(endpoint)
            .map(response => {
                let data = response.json().filter(item => {
                    if (item.slug == slug) {
                      return item;
                    }
                })
                console.log('DATA:',data);
                if (data.length == 1) {
                    return data[0]
                }
                return {};
            })
            .catch(this.handleError)
    }

    private handleError(error: any, caught: any): any {
        console.log(error, caught);
    }
}