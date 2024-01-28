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
        strong: 'Developer',
        p: 'Testing Company | May 2023 - Ago 2023',
      },
      text: '<p>I worked as Web Developer, doing maintenance in intern web pages about the company.</p>'
    },
    {
      summary: {
        strong: 'QA analyst',
        p: 'Testing Company | Mar 2022 - May 2023',
      },
      text: '<p>I worked as Software Automator, automating softwares in Android, IOS and Web platforms.</p>'
    },
    {
      summary: {
        strong: 'Developer Intern',
        p: 'SGE software | Set 2021 - Mar 2022',
      },
      text: '<p>I worked as Software Developer Intern. I developed some Windows Forms using FoxPro programing language and performed database maintenance.</p>'
    },
    {
      summary: {
        strong: 'IT Assistant',
        p: 'Unimed - VS | May 2019 - Ago 2021',
      },
      text: '<p>I worked as IT Assistant role, performing maintenance in computers and printers.</p>'
    },

  ])
}
