/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, Input } from '@angular/core';
import { StepOnboarding } from '@app/models/onboarding.model';
import { OnboardingService } from '../core/services/onboarding.service';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
})

export class TooltipsComponent implements OnInit {
  @Input() showNextButton = true;

  @Input() showSkipButton = true;

  @Input() visible = true;

  @Input() onboardingSteps: StepOnboarding[] = [];

  constructor(private _onboardingService: OnboardingService) {}

  ngOnInit() {
    this._onboardingService.setTooltips(this.onboardingSteps);
  }

  nextStep() {
    this._onboardingService.showNextTooltip();
  }

  getCurrentStep() {
    return this._onboardingService.getCurrentTooltip();
  }

  exitStep() {
    this._onboardingService.hideTooltip();
  }

  // eslint-disable-next-line class-methods-use-this
  potitionStepTop(data) {
    return document.getElementById(data).offsetTop - 33;
  }

  // eslint-disable-next-line class-methods-use-this
  potitionStepLeft(data) {
    return document.getElementById(data).offsetLeft - 5;
  }
}
