// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './email-sign-in.component.html',
  styleUrls: ['./email-sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSignInComponent {

  public sms = new FormControl('');

  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  private errorMessage_ = new BehaviorSubject('');
  public errorMessage = this.errorMessage_.asObservable();

  constructor(private router: Router, private auth: AuthService) { }

  public async emailsignIn() {
    this.busy_.next(true);
    this.errorMessage_.next('');
    try {
      await this.auth.signIn(this.sms.value);
      this.router.navigate(['/private']);
    } catch (err) {
      this.errorMessage_.next(err.message || err);
    } finally {
      this.busy_.next(false);
    }
  }
}
