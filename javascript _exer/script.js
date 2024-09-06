
const dataArray = [];


const form = document.getElementById('dataForm');
const input = document.getElementById('dataInput');
const list = document.getElementById('dataList');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    const inputValue = input.value.trim();

 
    if (inputValue) {
        
        dataArray.push(inputValue);

       
        input.value = '';

        
        updateList();
    }
});


function updateList() {
    
    list.innerHTML = '';

    
    dataArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}
