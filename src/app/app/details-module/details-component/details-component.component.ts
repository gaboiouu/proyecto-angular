import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-component',
  standalone: true,
  imports: [],
  templateUrl: './details-component.component.html',
  styleUrl: './details-component.component.css'
})
export class DetailsComponentComponent {
  task: { id: number; name: string; description: string } = { id: 0, name: '', description: '' };

  ngOnInit() {
    const selectedTask = localStorage.getItem('selectedTask');
    if (selectedTask) {
      this.task = JSON.parse(selectedTask);
    }
  }
}
 
