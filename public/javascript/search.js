async function searchFormSubmitHandler(event) {
    event.preventDefault();

    const query = document.querySelector('#query-box').value.trim();
    const type = document.querySelector('#type-box').value.trim();
    

    if (username && email && password) {
        const response = await fetch('https://tastedive.com/api/similar?q=' + query + '&type=' + type + '&info=1&k='+ key)
         // check the response status
        if (response.ok) {
            console.log('success' + response);
            const results = response.get({plain:true})
            response.render(searchresults,{
                results,
            })
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.search-form').addEventListener('submit', signupFormHandler);