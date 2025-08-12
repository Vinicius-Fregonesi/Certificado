import { Component } from '@angular/core';
import { IndexFormComponent } from "../index-form/index-form.component";
import { IndexTableComponent } from "../index-table/index-table.component";
import { Aluno } from '../model/aluno';
import { MenuComponent } from "../menu/menu.component";
import { MatListModule } from '@angular/material/list'; // Import do MatListModule



@Component({
  selector: 'app-index',
  standalone: true,
  imports: [IndexFormComponent, IndexTableComponent, MenuComponent, MatListModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  alunos:Aluno[]=[];
  alunoSelecionado:Aluno;
  cadastrarAluno(aluno:Aluno){
    aluno.id = this.alunos.length+1;
    this.alunos.push(aluno);    
  };
  editarAluno(aluno:Aluno){
    const index= aluno.id-1;
    this.alunos[index]=aluno;
    this.alunoSelecionado=null;
  }
  removerAluno(id:number){
    const index = this.alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
      this.alunos.splice(index, 1); // Remover o aluno usando o índice encontrado
      this.alunoSelecionado = null;
    } else {
      alert("Não foi possível excluir");
    }
    console.log(this.alunos);
  }
  selecionarAluno(aluno:Aluno){
    this.alunoSelecionado= aluno;
  }
}
