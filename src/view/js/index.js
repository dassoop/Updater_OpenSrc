const displayResponse = document.getElementById('display-response');


getVersion()
async function getVersion()
{
    var res = await window.api.req(
    {
        reqType: 'version', 
        body: 
        {
            
        }
    });

    if(res.error != null) return displayResponse.innerHTML = res.error;
    document.querySelector('#version').innerHTML = res.body.version
}