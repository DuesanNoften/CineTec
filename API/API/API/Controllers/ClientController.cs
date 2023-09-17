using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
public class ClientController
{
    
    private ClientServices _clientServices = new ClientServices();

    [HttpPost("/client")]
    public string Save([FromBody] ClientDto dto)
    {
        _clientServices.Save(dto);
        return "Se ha guardado exitosamente";
    }

    [HttpPut ("/client/id")]
    public string Update([FromBody] int id, ClientDto dto)
    {
        _clientServices.Update(dto, id);
        return "Datos Actualizados";
    }

    [HttpGet("/{id:int}/client")]
    public int Search(int id)
    {
        return _clientServices.Search(id);
    }

    [HttpGet ("/client/size")]
    public int Size()
    {
        return _clientServices.Size();
    }
    
    [HttpGet ("/client/id")]
    public ClientDto SearchById([FromBody] int pos)
    {
        return _clientServices.Element(pos);
    }

    [HttpDelete ("/client/id")]
    public string Delete(int id)
    {
        int data = Search(id);
        if (data == -1) return "Cliente no existe";
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