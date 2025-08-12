import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../model/aluno';
import { CommonModule } from '@angular/common';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-index-table',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './index-table.component.html',
  styleUrl: './index-table.component.css'
})
export class IndexTableComponent {
  @Input() alunosCadastrados:Aluno[]=[];
  @Output() selecionarAluno = new EventEmitter<Aluno>();
  selecionar(aluno:Aluno){
    this.selecionarAluno.emit(aluno);
  }
}
