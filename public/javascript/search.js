// const keyword = document.querySelector('#query-box').value.trim();




async function fecthAPI(keyword){
    const type = document.querySelector('#type-box').value.trim(); 
    const key ='439107-Reccomen-KF6ZAIUS'
    try{  
        const response= await fetch('/searchresults?q=' + keyword + '&type=' + type+ '&info=1&k='+key)

        console.log(await response.json())
    } catch(e){ 
        console.log(e)
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