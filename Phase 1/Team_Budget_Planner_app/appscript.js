const addto = e => {
    
    
    let newdata ={
        new_client: document.getElementById('ClientN').value,
        new_project: document.getElementById('ProjectN').value,
        new_budget: document.getElementById('NBudget').value,

    }
    
    localStorage.setItem('newdata', JSON.stringify(newdata));
}

function dispData()
{
    if(localStorage.getItem('newdata'))
    {
        let {new_client, new_project, new_budget} = JSON.parse(localStorage.getItem('newdata'));
        var updated = document.getElementById('updated');
        updated.innerHTML = `
            <table>
                <tbody>
                    <tr>
                        <th>Client Name</th>
                        <th>Project Name</th>
                        <th>Budget</th>
                    </tr>
                 <tr>
                        <td>${new_client}</td>
                         <td>${new_project}</td>
                         <td>${new_budget}</td>
                    </tr>
                 </tbody>
            </table>
    
        `;

    }


}