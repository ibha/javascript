const data = [
    {name: 'abc', value:10}, 
    {name: 'xyz', value: 5}, 
    {name: 'abc', value: 3}, 
    {name: 'mno', value: 4}, 
    {name: 'pqr', value: 8}, 
    {name: 'Pqr', value: 4}]
    
    data.sort((a,b)=> {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        if(a.name == b.name) {
            if(a.age > b.age) {
                return 1;
            } else {
                return -1;
            }
        }
    
    })
    console.log(data);
    
    