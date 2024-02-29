let salon={//object
    name:"The fashion pet",
    phone:"999-999-9999",
    address:{
        street:"Fur lane",
        number:"paw-123",
        zip:"21498"
    },
    pets:[] //array
}
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}

displayFooterInfo();
