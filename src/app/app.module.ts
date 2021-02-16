import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { UdemyComponent } from './udemy/udemy.component';
import { FreeComponent } from './free/free.component';
import { CartComponent } from './cart/cart.component';
import { ButtonCartComponent } from './button-cart/button-cart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { SpringComponent } from './spring/spring.component';
import { ExcelComponent } from './excel/excel.component';
import { CssComponent } from './css/css.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { LogoutComponent } from './logout/logout.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    UdemyComponent,
    FreeComponent,
    CartComponent,
    ButtonCartComponent,
    InvoiceComponent,
    JavaComponent,
    AngularComponent,
    SpringComponent,
    ExcelComponent,
    CssComponent,
    JavaScriptComponent,
    LogoutComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "button-cart",
        component: ButtonCartComponent
      },
      {
        path: "default",
        component: DefaultComponent

      },
      {
        path: "logout",
        component: LogoutComponent

      },
      {
        path: "java",
        component: JavaComponent

      },
      {
        path: "javaScript",
        component: JavaScriptComponent

      },
      {
        path: "css",
        component: CssComponent

      },
      {
        path: "angular",
        component: AngularComponent

      },
      {
        path: "invoice",
        component: InvoiceComponent

      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "registration",
        component: RegistrationComponent,
      },
      {
        path: "home",
        component: HomeComponent,
        children: [
          {
            path: "cart",
            component: CartComponent,
            children: [

              {
                path: "button-cart",
                component: ButtonCartComponent


              }
            ]
          }
        ]
      },
      {
        path: "home",
        component: HomeComponent,
        children: [
          {
            path: "button-cart",
            component: ButtonCartComponent,
            children: [
              {
                path: "cart",
                component: CartComponent
              }
            ]
          }
        ]


      },
      {
        path: "teacher",
        component: TeacherComponent
      },

      {
        path: "student",
        component: StudentComponent
      },
      {
        path: "udemy",
        component: UdemyComponent,
        children: [
          {
            path: "cart",
            component: CartComponent,
            children: [

              {
                path: "button-cart",
                component: ButtonCartComponent

              },
              {
                path: "invoice",
                component: InvoiceComponent

              }
            ]
          },
          {
            path: "invoice",
            component: InvoiceComponent

          }
        ]
      },
      {
        path: "free",
        component: FreeComponent,
        children: [
          {
            path: "angular",
            component: AngularComponent
    
          },

          {
            path: "css",
            component: CssComponent
    
          },

          {
            path: "javaScript",
            component: JavaScriptComponent
    
          },
          {
            path: "logout",
            component: LogoutComponent
    
          },
        ]
      },
      {
        path: "home",
        component: HomeComponent,
        children: [

          {
            path: "invoice",
            component: InvoiceComponent
          }
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
