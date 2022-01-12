import { Component } from '@angular/core';

interface Holiday {
  title: string;
}

@Component({
  selector: 'chriscurnow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  holidays: Holiday[] = [{ title: 'Holiday 1' }, { title: 'Holiday 2' }];

  addHoliday() {
    this.holidays.push({
      title: `New holiday ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
