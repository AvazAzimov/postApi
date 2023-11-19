elList = document.querySelector(".list");
function renderTodo(newArr, start, end, node) {
    newArr.slice(start,end).forEach(item => {
        const elItem = document.createElement("li");
        const elId = document.createElement("span");
        const  elTitle = document.createElement("h3");
        const  elText = document.createElement("p");
        const elImg = document.createElement("img");
        elId.textContent = item.userId
        elText.textContent = item.body;
        elTitle.textContent = `${item.title}`
        elItem.append(elId,elImg,elTitle,elText)
        node.appendChild(elItem)
    });
}
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => renderTodo(data,0,21,elList))
.catch(error => console.log(error))