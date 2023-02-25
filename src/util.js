export function getUserData(){
const data = JSON.parse(sessionStorage.getItem('userData'));
return data
}

//This function stores user data in sessionStorage. 
export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data))    //stringify the data and store it into the sessionStorage
}

export function clearUserData(){
    sessionStorage.removeItem('userData')
}

export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault()
        const formData = new FormData(event.target);  //retrieves the form data from the event object using the FormData constructor
        const data = Object.fromEntries(formData);    //crete an object with key-value pairs with formData

        callback(data)
    }
}