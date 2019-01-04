import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApplicationFormDto } from "./application-form-dto";

@Injectable()
export class ApplicationResource {
    constructor() { }

    apply(applicagtionForm: ApplicationFormDto): Observable<any> {
        // return this.httpClient.post(`${environment.api}/applications`, applicagtionForm);
        //mock:
        return Observable.timer(100);
    }

}