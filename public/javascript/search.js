async function searchFormSubmitHandler(event) {
    event.preventDefault();
    console.log('test')
    const key ='439107-Reccomen-KF6ZAIUS'
    const query = document.querySelector('#query-box').value.trim();
    // const type = document.querySelector('#type-box').value.trim(); + '&type=' + type 
    
    const response = await fetch('https://tastedive.com/api/similar?q=' + query + '&info=1&k='+ key)
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

document.querySelector('#searchBtn').addEventListener('submit', searchFormSubmitHandler);