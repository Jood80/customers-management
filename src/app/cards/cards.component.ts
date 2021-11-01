import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { PersonDTO } from './cards.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  formValue!: FormGroup;
  persons: PersonDTO = new PersonDTO();
  people: PersonDTO[] = [];
  p: number = 1;
  filterTerm!: string;

  constructor(private api: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      city: [''],
      country: [''],
      avatar: [''],
      orders: [['']],
    });
    this.getUsers();
  }

  getUsers(): PersonDTO[] {
    return this.api.getData().subscribe(
      (res: any) => (this.people = res),
      (err: Error) => console.log(err),
      () => console.log(this.people)
    );
  }

  postUser(): void {
    this.persons.name = this.formValue.value.name;
    this.persons.city = this.formValue.value.city;
    this.persons.country = this.formValue.value.country;
    this.persons.avatar = this.formValue.value.avatar;
    this.persons.orders = [this.formValue.value.orders];

    this.api.postData(this.persons).subscribe(
      (res) => {
        this.people = res;
        alert('Customer successfully added');
        this.formValue.reset();
      },
      (err) => console.log(err)
    );
  }

  removeUser(person: PersonDTO) {
    this.api
      .removeUser(person.id)
      .subscribe((res: any) => alert(`Successfully removed ${res.name} `));
  }

  onEdit(person: PersonDTO) {
    this.persons.id = person.id;
    this.formValue.controls['name'].setValue(person.name);
    this.formValue.controls['city'].setValue(person.city);
    this.formValue.controls['country'].setValue(person.country);
    this.formValue.controls['avatar'].setValue(person.avatar);
    this.formValue.controls['orders'].setValue(person.orders);
  }

  updateUser() {
    this.persons.name = this.formValue.value.name;
    this.persons.city = this.formValue.value.city;
    this.persons.country = this.formValue.value.country;
    this.persons.avatar = this.formValue.value.avatar;
    this.persons.orders = [this.formValue.value.orders];
    this.api.updateUser(this.persons, this.persons.id).subscribe((res: any) => {
      alert(`Successfully update ${res.name} `);
      this.formValue.reset();
    });
    this.getUsers();
  }
}
