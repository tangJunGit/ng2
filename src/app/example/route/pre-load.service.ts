import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from '../http/http.service';

@Injectable()
export class PreLoadService implements Resolve<any>{

    constructor(private httpService: HttpService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<any>|boolean{
        
        return this.httpService.getDatePromise().then(data => {
              if (data) {
                return data;
              } else { 
                this.router.navigate(['/route']);
                return false;
              }
            });
    }
}