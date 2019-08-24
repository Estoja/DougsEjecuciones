import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: User;

  constructor(public _angularFireAuth: AngularFireAuth) {
    this.user = null;
    this.getSession();
  }

  async isAuthenticated(): Promise<boolean> {
    await this.getSession().then(result => this.user = result);
    return this.user !== null;
  }

  getSession(): Promise <User|any> {
    return new Promise((resolve, reject) => {
      this._angularFireAuth.authState.subscribe(user => {
        resolve(user);
      });
    });
  }

  login(email: string, password: string) {
    return this._angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this._angularFireAuth.auth.signOut().then(() => this.user = null);
  }

  get displayName() {
    return this.user ? this.user.email : 'Invitado';
  }

  get idUser(): { uid: string; email: string; } {
    const uid = this.user ? this.user.uid : 'No uid';
    const email = this.user ? this.user.email : 'No email';

    return { uid, email };
  }
}
