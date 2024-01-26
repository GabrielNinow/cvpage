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
      alt: 'knowledge html5 icon'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'knowledge css3 icon'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'knowledge javascript icon'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'knowledge angular icon'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'knowledge nodejs icon'
    },
  ]);
}
