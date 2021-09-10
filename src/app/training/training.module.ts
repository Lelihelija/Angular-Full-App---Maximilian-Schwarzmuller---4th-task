import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'

// components
import { CurrentTrainingComponent } from './current-training/current-training.component'
import { NewTrainingComponent } from './new-training/new-training.component'
import { PastTrainingsComponent } from './past-trainings/past-trainings.component'
import { TrainingComponent } from './training.component'

@NgModule({
  declarations: [
    CurrentTrainingComponent,
    PastTrainingsComponent,
    NewTrainingComponent,
    TrainingComponent,
  ],
  imports: [FormsModule, MaterialModule, FlexLayoutModule, CommonModule],
  exports: [],
})
export class TrainingModule {}
