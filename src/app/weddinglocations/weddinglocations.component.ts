import { Component, OnInit } from '@angular/core';
import {Weddinglocation} from '../core/model/weddinglocation';
import {WeddingLocationServiceService} from '../wedding-location-service.service';

@Component({
  selector: 'app-weddinglocations',
  templateUrl: './weddinglocations.component.html',
  styleUrls: ['./weddinglocations.component.scss']
})
export class WeddinglocationsComponent implements OnInit {

  weddingLocations: Weddinglocation[];

  constructor(private weddinglocationService: WeddingLocationServiceService) {
  }

  ngOnInit(): void {
    this.weddinglocationService.findAll().subscribe(data => {
      this.weddingLocations = data;
    });
  }
}
