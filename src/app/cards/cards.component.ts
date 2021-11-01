import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { PersonDTO } from './cards.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  persons: PersonDTO = new PersonDTO();
  people: PersonDTO[] = [];
  p: number = 1;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getData().subscribe(
      (res: any) => (this.people = res),
      (err: Error) => console.log(err),
      () => console.log(this.people)
    );
  }
}
