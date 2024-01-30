import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'knowledge html5 icon',
      title: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'knowledge css3 icon',
      title: 'CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'knowledge javascript icon',
      title: 'Javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'knowledge angular icon',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'knowledge nodejs icon',
      title: 'Node',
    },
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'knowledge c# icon',
      title: 'C#',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'knowledge mysql icon',
      title: 'MySQL',
    },
  ]);
}
