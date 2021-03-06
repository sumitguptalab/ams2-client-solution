import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { Asset } from '@feat/asset/asset';
import { JsonResponse } from '@feat/utility/json-response';

@Injectable()
export class AssetService {

  url = this.syssvc.settings.baseurl + "api/Assets/";

  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(asset: Asset): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", asset) as Observable<JsonResponse>;
  }
  change(asset: Asset): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", asset) as Observable<JsonResponse>;
  }
  remove(asset: Asset): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", asset) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
