import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Journal } from '../interfaces/journal';
import { Observable } from 'rxjs';
import { Researcher } from '../interfaces/researcher';
import { Subscription } from '../interfaces/subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  /**
   * Service to manage subscriptions and interactions with the server.
   * @param {HttpClient} http - The HttpClient service for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * The base URL of the API to interact with subscriptions data.
   */
  url = 'http://localhost:5155/api/Subscription';

  /**
   * Get the feed of journals for a specific researcher from the server.
   * @param {string} researcherId - The ID of the researcher to get the feed for.
   * @returns {Observable<Journal[]>} An observable of the array of journals in the feed.
   */
  getFeed(researcherId: string): Observable<Journal[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Journal[]>(`${this.url}/feed/${researcherId}`, {
      headers,
    });
  }

  /**
   * Get all the subscribers for a specific researcher from the server.
   * @param {string} researcherId - The ID of the researcher to get subscribers for.
   * @returns {Observable<Researcher[]>} An observable of the array of subscribers (researchers).
   */
  getSubscriptors(researcherId: string): Observable<Researcher[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Researcher[]>(
      `${this.url}/subscriptors/${researcherId}`,
      { headers }
    );
  }

  /**
   * Get all the subscriptions for a specific researcher from the server.
   * @param {string} researcherId - The ID of the researcher to get subscriptions for.
   * @returns {Observable<Subscription[]>} An observable of the array of subscriptions.
   */
  getSubscriptions(researcherId: string): Observable<Subscription[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Subscription[]>(
      `${this.url}/subscriptions/${researcherId}`,
      { headers }
    );
  }

  /**
   * Subscribe one researcher to another.
   * @param {Subscription} subscription - The subscription object to create.
   * @returns {Observable<any>} An observable of the HTTP response.
   */
  setSubscription(subscription: Subscription): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http.post<Subscription>(this.url, subscription, { headers });
  }

  /**
   * Delete a subscription
   * @param {string} subscriptionId - The ID of the subscription to unsubscribe from.
   * @returns {Observable<any>} An observable of the HTTP response.
   */
  unSubscribe(subscriptionId: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application' });
    return this.http.delete<Subscription>(`${this.url}/${subscriptionId}`, {
      headers,
    });
  }
}
