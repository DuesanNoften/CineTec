using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
public class ClientController
{
    
    private ClientServices _clientServices = new ClientServices();

    [HttpPost("/client")]
    public ClientDto Save([FromBody] ClientDto dto)
    {
        return _clientServices.Save(dto);
    }

    [HttpPut ("/client/id")]
    public string Update([FromBody] int id, ClientDto dto)
    {
        _clientServices.Update(dto, id);
        return "Datos Actualizados";
    }

    [HttpGet("/client")]
    public List<ClientDto> GetAll()
    {
        return _clientServices.LoadArchive();
    }
    
    [HttpGet("/{id:int}/client")]
    public ClientDto Search(int id)
    {
        return _clientServices.Search(id);
    }

    [HttpGet ("/client/size")]
    public int Size()
    {
        return _clientServices.Size();
    }
    
    [HttpGet ("/client/id")]
    public ClientDto SearchById([FromBody] int ssn)
    {
        return _clientServices.Element(ssn);
    }

    [HttpDelete ("/client/id")]
    public string Delete(int id)
    {
        ClientDto data = _clientServices.Search(id);
        if (data == null) return "Cliente no existe";
        _clientServices.Delete(id);
        return "Cliente Eliminado";
    }
    
    [HttpGet ("/client/age/id")]
    public int GetAge(int id)
    {
        return _clientServices.Age(_clientServices.Element(id));
    }
        
    //Faltan cosas del video 4
}