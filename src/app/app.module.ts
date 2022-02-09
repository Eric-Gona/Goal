import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { FormsModule } from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { BestVotedDirective } from './best-voted.directive';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalFormComponent,
    GoalDetailComponent,
    DateCountPipe,
    StrikethroughDirective,
    BestVotedDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
