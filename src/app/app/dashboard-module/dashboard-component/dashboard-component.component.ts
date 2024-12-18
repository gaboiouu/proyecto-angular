import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent {
  constructor(private router: Router) {}

  viewDetail(taskId: number, taskName: string) {
    let description = '';

    switch (taskId) {
      case 1:
        description = 'Es hora de levantarse.';
        break;
      case 2:
        description = 'Toma desayuno.';
        break;
      case 3:
        description = 'Hora de programar.';
        break;
      case 4:
        description = 'Tomar un descanso..';
        break;
      case 5:
        description = 'Hora de almorzar.';
        break;
      case 6:
        description = 'Programar de nuevo0. Revisa pendientes';
        break;
      case 7:
        description = 'Ejercitate un poco para la salud';
        break;
      case 8:
        description = 'Llegó la hora de dormir.';
        break;
    }

    const task = { id: taskId, name: taskName, description };
    localStorage.setItem('selectedTask', JSON.stringify(task));
    this.router.navigate(['/detalles']);
  }
}
