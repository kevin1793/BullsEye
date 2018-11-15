import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
export const firebaseConfig = environment.firebaseConfig;
// import firebase from "firebase";
// import { AngularFireAuthModule } from 'angularfire2/auth';


import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

// import {firebase} from "firebase";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent },
 
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, BrowserAnimationsModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
