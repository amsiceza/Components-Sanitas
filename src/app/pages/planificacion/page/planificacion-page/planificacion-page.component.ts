import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planificacion-page',
  templateUrl: './planificacion-page.component.html',
  styleUrl: './planificacion-page.component.scss'
})
export class PlanificacionPageComponent implements OnInit{
  today = new Date();
  weekDates: Date[] = [];

  ngOnInit() {
    const daysUntilSunday = 7 - this.today.getDay();

    for (let i = 0; i <= daysUntilSunday; i++) {
      let fecha = new Date();
      fecha.setDate(this.today.getDate() + i);
      this.weekDates.push(fecha);
    }
  }
}
