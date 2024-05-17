import {name} from './create';

const teste: string = "ok";

console.log(teste);

const aquela: number = 5 + 5;

console.log(aquela);

console.log(name);

const buttonCreate: any = document.getElementById('create');
console.log(buttonCreate);

buttonCreate.addEventListener('click', async function () {
   try {
      console.log("Teste da API fetch");
   } catch (error) {
    console.log(error);
   }
});