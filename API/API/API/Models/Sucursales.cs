namespace API.Models
{
    public class Sucursales
    {
        public string Name { get; set; }
        public string Adress { get; set; }
        public int Space { get; set; }

        public ICollection<Salas> salas { get; set; }
        public ICollection<Factura> facturas { get; set; }


    }
}

