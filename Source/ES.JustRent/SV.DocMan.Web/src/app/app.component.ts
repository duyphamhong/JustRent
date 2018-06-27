import { Component } from '@angular/core';
import { LoadingIndicatorService } from './commons/loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loadingService: LoadingIndicatorService) { }
  title = 'Tour of Duy\'s Super Heroes';

  isLoading(): boolean {
    return this.loadingService.loading;
  }
}
