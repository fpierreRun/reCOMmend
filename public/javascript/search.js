async function searchFormSubmitHandler(event) {
    event.preventDefault();

    const key ='439107-Reccomen-KF6ZAIUS'
    const query = document.querySelector('#query-box').value.trim();
    const type = document.querySelector('#type-box').value.trim();
    
    const response = await fetch('https://tastedive.com/api/similar?q=' + query + '&type=' + type + '&info=1&k='+ key)
         // check the response status
        if (response.ok) {
            console.log('success' + response);
            const results = response.get({plain:true})
            response.render(searchresults,{
                results,
            })
            const responseTwo= await fetch('/api/searches',{
                method: 'post',
                body:JSON.stringify({
                    query                    
                })
            })
            if (responseTwo.ok){
                console.log('success #2')
                response.json(responseTwo)
            }
        } else {
            alert(response.statusText);
        }
    
};

document.querySelector('.search-form').addEventListener('submit', signupFormHandler);