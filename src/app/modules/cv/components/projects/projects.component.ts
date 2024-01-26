import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayExperiences = signal<IProjects[]>([
    {
      src: 'assets/img/github.svg',
      alt: 'Github Repository',
      title: 'Github Repository',
      width: '100',
      height: '51',
      description: 'Github repository where you can find my portifolio projects',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/GabrielNinow',
        }
      ]
    }
  ])
}
