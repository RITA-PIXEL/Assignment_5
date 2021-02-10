const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click',function(){
    const mealName = document.getElementById('meal-form-user').value;
    getData(mealName);
})

function getData(mealName){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`)
    .then(response => response.json())
    .then(data => displayData(data.meals))
    .catch(error => console.log(error))
}


function displayData(data){
    console.log(data)
    const mealContainer = document.getElementById('meal-container');
    data.forEach(element => {
        const div = document.createElement('div');
        div.className = 'meal';
        
        const img = document.createElement('img')
        img.src = element.strMealThumb;

        const h3 = document.createElement('h3');
        h3.innerText = element.strMeal;

        div.appendChild(img)
        div.appendChild(h3)

        div.addEventListener('click',()=>mealData(element.idMeal))

        mealContainer.appendChild(div);

    });
}


// get single meal data 
function mealData(idMeal){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => response.json())
    .then(data => displayMealData(data.meals[0]))
    .catch(error => console.log(error))
}


// display single meal data
function displayMealData(data){
    console.log(data)
    const mealContainer = document.getElementById('meal-container');
    mealContainer.style.display = 'none';

    const mealDetails = document.getElementById('meal-details');
    mealDetails.style.display = 'block';

    const exitBtn = document.getElementById('exit-btn');
    exitBtn.style.fontSize='20px'
    exitBtn.addEventListener('click',()=>{
        mealDetails.style.display = 'none';
        mealContainer.style.display = 'grid';

    })
    const img = document.getElementById('meal-image');
    img.src = data.strMealThumb;
    console.log(data)
    document.getElementById('meal-name').innerText = data.strMeal;
    document.getElementById('item1').innerText =  data.strMeasure1;
    document.getElementById('item2').innerText =  data.strMeasure2;
    document.getElementById('item3').innerText =  data.strMeasure3;
    document.getElementById('item4').innerText =  data.strMeasure4;  
    document.getElementById('item5').innerText =  data.strMeasure5; 
    document.getElementById('item6').innerText =  data.strMeasure6;   
}
