import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'

// components
import { CurrentTrainingComponent } from './current-training/current-training.component'
import { StopTrainingComponent } from './current-training/stop-training.component'
import { PastTrainingsComponent } from './past-trainings/past-trainings.component'
import { NewTrainingComponent } from './new-training/new-training.component'
import { TrainingComponent } from './training.component'

@NgModule({
  declarations: [
    CurrentTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent,
    NewTrainingComponent,
    TrainingComponent,
  ],
  imports: [
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    AngularFirestoreModule,
  ],
  exports: [],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
