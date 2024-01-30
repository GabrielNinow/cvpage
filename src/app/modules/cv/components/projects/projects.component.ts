import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/github.svg',
      alt: 'Github Repository',
      title: 'Github Repository',
      width: '100',
      height: '80',
      description: 'Github repository where you can find my portifolio projects and source code of the another projects',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/GabrielNinow',
        }
      ]
    },
    {
      src: 'assets/img/projects/todo-list.png',
      alt: 'To do list portifolio',
      title: 'To do list portifolio',
      width: '100',
      height: '80',
      description: 'one of my most recently projects, i made when i was learning angular. Further i will create a back-end using asp.net to save task in a database',
      links: [
        {
          name: 'To-do list',
          href: 'https://gabrielninow.github.io/Todo-List/browser/',
        }
      ]
    },
    {
      src: 'assets/img/projects/acme-logo.png',
      alt: 'Acme website portifolio',
      title: 'Acme website',
      width: '100',
      height: '51',
      description: 'one of my older projects, i did when i was in vocational school, and remade recently, with my actual skills using only HTML. CSS, Javascript and Bootstrap',
      links: [
        {
          name: 'Acme Website',
          href: 'https://gabrielninow.github.io/ACME-Website/',
        }
      ]
    }
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
