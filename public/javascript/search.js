// const keyword = document.querySelector('#query-box').value.trim();




async function fecthAPI(keyword){
    const type = document.querySelector('#type-box').value.trim(); 
    const key ='439107-Reccomen-KF6ZAIUS'
    const response = await fetch('/searchresults',{
        method: 'post',
        body: JSON.stringify({
            type,
            key,
            keyword            
        })
    })
    if (response.ok) {
        console.log('success');
    } else {
        alert(response.statusText);
    }
}

async function searchFormSubmitHandler(event) {
    event.preventDefault();
    
    const keyword = document.querySelector('#query-box').value.trim();
    console.log(keyword)
    if (keyword){
        const response = await fetch('/api/search',{
            method: 'post',
            body:JSON.stringify({
                keyword                    
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (!response.ok){
        console.log(response.statusText)
        
    }
    fecthAPI(keyword);
    
    };
};

document.querySelector('#searchBtn').addEventListener('click', searchFormSubmitHandler);