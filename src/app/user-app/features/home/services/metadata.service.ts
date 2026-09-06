import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BaseHttpService } from '../../../../shared/services/http/base-http.service';
import { environment } from '../../../../../environments/environment';
import { Metadata } from '../models/metadata.model';

@Injectable({
  providedIn: 'root',
})
export class MetadataService extends BaseHttpService<Metadata> {
  constructor() {
    super(inject(HttpClient), environment.apiBaseUrl);
  }

  protected getResourceUrl(): string {
    return 'metadata';
  }
}
