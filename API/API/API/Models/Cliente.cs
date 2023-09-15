namespace API.Models
{
    public class Cliente
    {
        public int Cedula { get; set; }
        public string Nombre { get; set;}
        public string Correo { get; set;}
        public int Phone { get; set;}
        public DateTime nacimiento { get; set;}
        public int Age { get; set;}
        public ICollection<Factura> factura { get; set; }

    }
}
