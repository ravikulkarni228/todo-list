//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListsComponent } from './components/home/task-lists/task-lists.component';
import { AddTaskDialogComponent } from './components/dialogs/add-task-dialog/add-task-dialog.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';

//SERVICES
import { ConfirmationDialogService } from './components/dialogs/confirmation-dialog/confirmation-dialog.service';

// REDUCER
import { taskReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    AddTaskDialogComponent,
    TaskListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot({
      task: taskReducer
    }),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent, AddTaskDialogComponent]
})
export class AppModule { }
