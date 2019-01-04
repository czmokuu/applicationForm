import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotificationModel } from './notification.model';

@Injectable()
export class NotificationService {

    private readonly sub: Subject<NotificationModel>;

    constructor() {
        this.sub = new Subject<NotificationModel>();
    }

    get messages(): Observable<NotificationModel> {
        return this.sub.asObservable();
    }

    sendSuccess(message: string): void {
        let msg = new NotificationModel(message);
        this.sub.next(msg);
    }
    
    sendError(message: string): void {
        let msg = new NotificationModel(message, true);
        this.sub.next(msg);
    }
}
