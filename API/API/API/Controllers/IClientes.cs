using API.Models;
using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IClientes : Controller
    {
        private readonly DataManager _jsonDataManager;

        public IClientes(DataManager jsonDataManager)
        {
            _jsonDataManager = jsonDataManager;
        }
        [HttpGet]
        public IActionResult GetClients()
        {
            var data = _jsonDataManager.LoadData<Cliente>("Cliente.json");
            return Ok(data);
        }
        [HttpPost]
        public IActionResult Add([FromBody] Cliente cliente) 
        {
            _jsonDataManager.Add<Cliente>(cliente, "Cliente.json");
            return Ok(cliente);
        }
    }

}
