const spanError = document.getElementById('error')

async function loadList() {
    const API_URL_NODES_LIST = 'https://api.backoffice.lac-net.net/nodes/portal';
   // const API_URL_NODES_LIST = 'http://localhost:5000/nodes/portal';
    var optionUrl = {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '*',
          
        }
      }
  
  
    const res = await fetch(API_URL_NODES_LIST,optionUrl);
    var table = document.getElementById("tableNodes");
    
    
      if(res.status == 204){
        spanError.innerHTML = " Sin contenido: " + res.status ;
      
      } else if (res.status == 200 ){
        const data = await res.json();
        
        console.log(res.status)

        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
    
        cell1.innerHTML = "Count"
        
        cell2.innerHTML = "Entity"
       
        cell3.innerHTML = "Network ID"
       
        cell4.innerHTML = "Network Name"
        
        cell5.innerHTML = "Type"
     
        cell6.innerHTML = "Technical Contact"
        
        cell7.innerHTML = "Business contact"
       
        cell8.innerHTML = "Node ID"
        

        let j =1

        data.forEach(node => {
        
         
           
  
            let row = table.insertRow(j);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            let cell8 = row.insertCell(7);

           
           
            cell1.innerHTML = j,
            cell2.innerHTML = node.entity,
            cell3.innerHTML = node.networkId;
            cell4.innerHTML = node.networkName;
            cell5.innerHTML = node.type;
            cell6.innerHTML = node.nameTechnicalContact;
            cell7.innerHTML = node.nameBussinesContact;
            cell8.innerHTML = node.enode;

          j ++
        });
      }else if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status + res.error;
      }
  }

  loadList()