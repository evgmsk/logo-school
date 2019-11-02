import {
    Directive,
    Input,
    OnInit,
    Inject,
    PLATFORM_ID,
    OnDestroy,
    HostListener
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

import {TourService} from '../services/tour.service';

@Directive({
    selector: '[tourEvent]',
})
export class TourEventsDirective implements OnInit, OnDestroy {
    @Input('tourEvent') eventType: string;
    isBrowser: boolean;
    handler: () => void;
    constructor(
        private readonly tourService: TourService,
        @Inject(PLATFORM_ID) platformId: {}) {
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngOnInit() {
        if (!this.isBrowser) {
            return;
        }
        if (this.eventType === 'next') {
            this.handler = this.tourService.nextStep;
        }
        if (this.eventType === 'prev') {
            this.handler = this.tourService.prevStep;
        }
        if (this.eventType === 'close') {
            this.handler = this.tourService.stopTour;
        }
    }
    @HostListener('click', ['$event']) onClick(event: Event) {
        console.log(event);
        this.handler();
    }
    ngOnDestroy() {
    }
}
