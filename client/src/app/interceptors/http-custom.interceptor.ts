import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { MatSnackBar } from "@angular/material";

@Injectable()
export class HttpCustomInterceptor implements HttpInterceptor {
  constructor(public snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.method === "POST" ||
      request.method === "PUT" ||
      request.method === "PATCH"
    ) {
      request = request.clone({
        setHeaders: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
    }

    return next.handle(request).pipe(
      catchError(response => {
        this.snackBar.open("Oops! Please try again.", null, {
          duration: 5000
        });

        return throwError(response);
      })
    );
  }
}
