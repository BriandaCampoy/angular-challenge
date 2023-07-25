import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Journal } from '../interfaces/journal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  /**
   * Service to manage journal data using HTTP requests.
   * @param {HttpClient} http - The HttpClient service to perform HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * The base URL of the API to interact with the journals' data.
   */
  private url = 'http://localhost:5155/api/Journal';


  /**
   * Get a journal by its unique identifier (ID).
   * @param {string} id - The unique identifier (ID) of the journal to retrieve.
   * @returns {Observable<Journal>} An observable with the journal data.
   */
  getJournalById(id: string): Observable<Journal> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Journal>(`${this.url}/${id}`, { headers });
  }

  /**
   * Get journals associated with a specific researcher.
   * @param {string} id - The unique identifier (ID) of the researcher to retrieve journals for.
   * @returns {Observable<Journal[]>} An observable with an array of journals associated with the researcher.
   */
  getJournalByResearcher(id: string): Observable<Journal[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application' });
    return this.http.get<Journal[]>(`${this.url}/researcher/${id}`, {
      headers,
    });
  }

  /**
   * Upload a new journal with its associated journal file.
   * @param {Journal} journal - The journal data to be uploaded.
   * @param {File} journalFile - The journal file to be uploaded.
   * @returns {Observable<any>} An observable with the response data.
   */
  uploadJournal(journal: Journal, journalFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('researcherId', journal.researcherId);
    formData.append('title', journal.title);
    formData.append('journalFile', journalFile);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(this.url, formData, { headers });
  }

  /**
   * Update an existing journal with optional changes to the journal file.
   * @param {Journal} journal - The journal data to be updated.
   * @param {File | undefined} journalFile - The optional journal file to be updated.
   * @returns {Observable<any>} An observable with the response data.
   */
  updateJournal(
    journal: Journal,
    journalFile: File | undefined
  ): Observable<any> {
    const formData = new FormData();
    formData.append('title', journal.title);
    if (journalFile != undefined) {
      formData.append('journalFile', journalFile);
    }
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.put<any>(`${this.url}/${journal.journalId}`, formData, {
      headers,
    });
  }

  /**
   * Delete a journal by its unique identifier (ID).
   * @param {string} id - The unique identifier (ID) of the journal to be deleted.
   * @returns {Observable<any>} An observable with the response data.
   */
  deleteJournal(id: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application' });
    return this.http.delete<Journal[]>(`${this.url}/${id}`, { headers });
  }
}
