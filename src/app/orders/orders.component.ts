import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonDTO } from '../cards/cards.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  person: PersonDTO = new PersonDTO();
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api
        .getDataById(id)
        .subscribe((res: PersonDTO) => (this.person = res));
    }
  }
}
