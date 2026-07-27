import { Injectable } from '@angular/core';

@Injectable() // Intentionally omitted providedIn: 'root' to demonstrate component-level providers
export class NotificationService {
  private notifications: string[] = [];

  send(message: string) {
    this.notifications.push(message);
    console.log('Notification sent:', message);
  }

  getNotifications() {
    return this.notifications;
  }
}
