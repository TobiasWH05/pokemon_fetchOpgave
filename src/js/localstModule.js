const localstModule = (function() {

    const create = function(name, data){
        if(typeof(data) === "object"){
            data = JSON.stringify(data)
        }
        localStorage.setItem(name, data)
    }

    const read = function(name){
       let readvalue = localStorage.getItem(name)

       if(readvalue && readvalue.charAt(0) === "{" && readvalue.endsWith("}")) {
           readvalue = JSON.parse(readvalue)
       }

       if(readvalue && !isNaN(readvalue)){
           readvalue = Number(readvalue)
       }

       return readvalue
    }

    const remove = function(name){
        localStorage.removeItem(name)
    }

    return {
        create, 
        read, 
        remove
    }

})();