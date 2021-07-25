'use strict'

      let formEl = document.querySelector("form");
      let tableEl = document.querySelector("table");
      let tbodyEl = document.querySelector("tbody");
    

function addNewBook(e){
    e.preventDefault();
    let bookname = document.getElementById("bookname").value;
    
    let bookprice = document.getElementById("bookprice").value;
   
    
    tbodyEl.innerHTML += `
            <tr>
                <td>${bookname}</td>
                <td></td>
                <td>${bookprice}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
        }

        function deleteRow(e){

            if(!e.target.classList.contains("deleteBtn")){
                return;
            }
            
            let btn = e.target;
            btn.closest("tr").remove();
            
            }
            
            formEl.addEventListener("submit", addNewBook);
            tableEl.addEventListener("click", deleteRow);
               
            
            function saveToLocalStorage(){
                localStorage.setItem('key', )
            }
            saveToLocalStorage()