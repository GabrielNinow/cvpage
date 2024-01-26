import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'QA analyst',
        p: 'Testing Company | Mar 2022 - Ago 2023',
      },
      text: 'lorem ipsun'
    },
    {
      summary: {
        strong: 'QA analyst',
        p: 'Testing Company | Mar 2022 - Ago 2023',
      },
      text: 'lorem ipsun'
    },
    {
      summary: {
        strong: 'QA analyst',
        p: 'Testing Company | Mar 2022 - Ago 2023',
      },
      text: 'lorem ipsun'
    },
    {
      summary: {
        strong: 'QA analyst',
        p: 'Testing Company | Mar 2022 - Ago 2023',
      },
      text: 'lorem ipsun'
    },
    {
      summary: {
        strong: 'QA analyst',
        p: 'Testing Company | Mar 2022 - Ago 2023',
      },
      text: 'lorem ipsun'
    },
  ])
}
