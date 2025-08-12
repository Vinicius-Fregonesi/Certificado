import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Aluno } from '../model/aluno';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-index-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './index-form.component.html',
  styleUrl: './index-form.component.css'
})
export class IndexFormComponent {
  @Input() alunoSelecionado:Aluno;
  @Output() alunoCadastro= new EventEmitter<Aluno>();
  @Output() alunoAlterar= new EventEmitter<Aluno>();
  @Output() alunoExcluir= new EventEmitter<number>();
  formulario= new FormGroup({
    id: new FormControl(null),
    nome:new FormControl('', [Validators.required,Validators.minLength(3)]),
    nota1:new FormControl(null, [Validators.required,Validators.min(0), Validators.max(10)]),
    nota2:new FormControl(null, [Validators.required,Validators.min(0), Validators.max(10)])
  })
  btnCadastrar:boolean=true;
  cadastrar(){
    this.alunoCadastro.emit(this.formulario.value as Aluno);
    this.formulario.reset();
  }
  alterar(){
    this.alunoAlterar.emit(this.formulario.value as Aluno);
    this.formulario.reset();
    this.btnCadastrar=true;
  }
  deletar(){
    this.alunoExcluir.emit(this.alunoSelecionado.id);
    this.formulario.reset();
    this.btnCadastrar=true;
  }

  ngOnChanges(){
    if(this.alunoSelecionado){
      this.formulario.setValue({
        id: this.alunoSelecionado.id,
        nome: this.alunoSelecionado.nome,
        nota1: this.alunoSelecionado.nota1,
        nota2: this.alunoSelecionado.nota2
      });
      this.btnCadastrar=false;
    }
  }  
}
