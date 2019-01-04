import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    show = false;
    message = '';
    isError: boolean;

    constructor(private notificationService: NotificationService, private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.notificationService.messages.subscribe(message => {
            this.show = false;
            this.message = message.message;
            this.isError = message.isError;
            this.ref.detectChanges();
            this.show = true;
            this.ref.detectChanges();
        });
    }
}
