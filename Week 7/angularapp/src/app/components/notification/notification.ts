import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  // Component-level providers create a new service instance for this component and its children
  providers: [NotificationService]
})
export class Notification {
  constructor(public notificationService: NotificationService) {}
}
