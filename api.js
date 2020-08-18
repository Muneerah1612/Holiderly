document.getElementById('sub').addEventListener('click',loadText);
function loadText(e){
    e.preventDefault();
    
    
    let count=document.getElementById('country').value;
    let mnt = document.getElementById('month').value;
    let date=document.getElementById('day').value;
    let xml = new XMLHttpRequest();
    
    xml.open('GET', `https://holidays.abstractapi.com/v1/?api_key=4922de9b9f2f44ec8a0165b24525573f&country=${count}&year=2020&month=${mnt}&day=${date}`, true);
    xml.onload = function(){
        if(this.status ==200) {
            let result=JSON.parse(this.responseText)
            console.log(result);
            let output="";
            output +=  `<h2> Result </h2>
                       <div>
                         <h4> Name: ${result[0].name} </h4>
                         <p> Date: ${result[0].date} </p>
                         <p> Day: ${result[0].week_day} </p>
                         <p> Is it Observed? : ${result[0].is_observed} </p>

                         </div>`;

            document.getElementById('text').innerHTML = output;
            

            
        }
    }
    xml.send(); 
}