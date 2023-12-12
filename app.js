let recipes = [];
const spanCount = document.querySelector('.count');
const recipesList = document.querySelector('ul');

function render(){
   spanCount.innerHTML = recipes.length;
   const html = recipes.map(function(recipe){
    console.log(recipe);
      return `
         <li>
         <h5>${ recipe.name }</h5>
         <img src ='${ recipe.imageUrl }'
         </li>
      `;

   }).join('');
   recipesList.innerHTML = html;
}

render();

async function fetchRecipes(){
    try{
       const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/ftb-web-pt-am/recipes');
       const json = await response.json();
       recipes = json.data;
       render();
    }
    catch(ex){
        console.log(ex);
    }
}

fetchRecipes();