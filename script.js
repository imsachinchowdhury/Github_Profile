console.log('welcome to search github account project');


try {
    //call the function and get a promise


    //select form 
    let form = document.getElementById('form');
    console.log(form);



    //Select search bar
    let search = document.getElementById('search');
    console.log(search);

    //Select content div
    let content = document.getElementById('content');
    console.log(content);

        //Select content div
        let dammyText = document.getElementById('dammyText');
        console.log(dammyText);

    form.addEventListener('submit', (e) => {
        dammyText.style.display="block";
        e.preventDefault();
        content.innerHTML = "";
        let value = search.value;
        search.value = "";

        if (value) {
            //This is the api
            let url = `https://api.github.com/users/${value}`;
            let a = searchProfile(url);
            a.then((data) => {
                let result = data;
                console.log(result);

                //create a image
                let img = document.createElement('img');
                img.setAttribute('src', result.avatar_url);
                img.setAttribute('style', 'border-radius:100%;');
                //img.src=`${result.avatar_url}`

                //create h3 tag
                let h3 = document.createElement('h3');
                h3.setAttribute('style', 'my-3');
                h3.innerHTML = "Name :" + data.name;
                console.log(img);

                //create a h3 tag
                let h33 = document.createElement('h3');
                h33.innerHTML = `Url Link : <a href=${data.html_url}>${data.login}</a>`;
                
                //create a h3 tag
                let p = document.createElement('p');
                p.innerHTML=data.bio;

                content.appendChild(img);
                content.appendChild(h3);
                content.appendChild(h33);
                content.appendChild(p);

            })
        }
    })

} catch (error) {
    console.log(error);

} finally {
    console.log('we are insde finally block');

}

//declare a function that return a promise
async function searchProfile(link) {
    let response = await fetch(link);
    let data = await response.json();
    return data;
}
console.log('after call searchProfile function');