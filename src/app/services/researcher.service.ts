import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Researcher } from '../interfaces/researcher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResearcherService {
  /**
   * Service to manage researchers' data and interactions with the server.
   * @param {HttpClient} http - The HttpClient service for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * The base URL of the API to interact with the researchers' data.
   */
  url = 'http://localhost:5155/api/Researcher';

  /**
   * Get all researchers from the server.
   * @returns {Observable<Researcher[]>} An observable of the array of researchers.
   */
  getAllResearchers(): Observable<Researcher[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Researcher[]>(`${this.url}`, { headers });
  }

  /**
   * Get a specific researcher by their ID from the server.
   * @param {string} id - The ID of the researcher to retrieve.
   * @returns {Observable<Researcher>} An observable of the researcher object.
   */
  getResearcher(id: string): Observable<Researcher> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Researcher>(`${this.url}/${id}`, { headers });
  }

  /**
   * Create a new researcher on the server.
   * @param {Researcher} researcher - The researcher object to create.
   * @returns {Observable<any>} An observable of the HTTP response.
   */
  postResearcher(researcher: Researcher) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}`, researcher, { headers });
  }

  /**
   * Update an existing researcher on the server.
   * @param {Researcher} researcher - The researcher object to update.
   * @returns {Observable<any>} An observable of the HTTP response.
   */
  putResearcher(researcher: Researcher) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url}/${researcher.researcherId}`, researcher, {
      headers,
    });
  }
}
