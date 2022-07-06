/**
 * 
 * @version 3.0.0
 * @author Edward Tanoto
 * @license MIT
 * 
 */

 class EasyHTTP{
     //Make HTTP GET REQUEST
    async get(url){
         const response = await fetch(url)
         const resData = response.json();
         return resData;    
     }
     //Make HTTP POST REQUEST
    async post(url, data) {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        const resData = response.json();
        return resData;
      }
      //Make HTTP PUT  REQUEST
      async put(url, data) {
         const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        const resData = response.json();
        return resData;
          
      }
      //Make HTTP DELETE  REQUEST
      async delete(url) {
        const response = fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })
          const resData = response.json();
          return resData;

      }
      
 }