let evet = document.getElementById("btn");
evet.addEventListener("click", function () {
    let arr =["sanji.png","zoro.png","luffy.jpg","nami.png"];
    let arr1=["red","lime","blue","silver","orange","pink","gold"];
    let color = Math.floor(Math.random()*arr.length);
    // cha.innerHTML=arr[color];
    let color1 = Math.floor(Math.random()*arr1.length);
    let date = new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getMilliseconds());
    let randomImage = arr[color];
    document.body.style.backgroundColor=arr1[color1];
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Random Image">`;
    head.innerHTML="DOM BASIC";
})
