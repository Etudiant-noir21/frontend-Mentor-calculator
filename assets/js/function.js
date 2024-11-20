// recuperation des elements du dom
const screen = document.getElementById('screen');
// console.log(screen);
// recuperation des buttons
const keys = document.querySelectorAll('.keys button');
// console.log(keys);
// recuperation des operations
let operations = document.querySelectorAll('.operation');
// console.log(operations);
// recuperation des nombres
let numbers = document.querySelectorAll('.number');

const Reset = document.querySelector('.reset')
console.log(Reset)

const del = document.querySelector('.delete')

const egale = document.querySelector('.egale')
console.log(egale);

let operateurSelected ;
export const calculete = () => {

    // les nombres
    numbers = Array.from(numbers)
    console.log(numbers)
   if(numbers.length){
   numbers.forEach(nombre=>{
    nombre.addEventListener('click',()=>{
       const value = nombre.innerText
    //    afficher les nombres dans le l'ecran
    screen.value +=value
    operateurSelected = false
        
    })
   })
}

// les operateurs
operations = Array.from(operations)
    console.log(operations)
   if(operations.length){
   operations.forEach(operation=>{
    operation.addEventListener('click',()=>{
        if(!operateurSelected){
        //afficher les operateur dans le l'ecran
         const value = operation.innerText
         screen.value +=value
         operateurSelected = true
        }
      
    })
   })
}

// la touche reset
  Reset.addEventListener('click', ()=>{
    screen.value = ''
  })
    
//   la touche supprimer
del.addEventListener('click',()=>{
    screen.value = screen.value.slice(0, -1)
})

// gestion de la touche egale
egale.addEventListener('click',()=>{
    if(!operateurSelected){
        screen.value = eval(screen.value)
        
    }
})

   }




