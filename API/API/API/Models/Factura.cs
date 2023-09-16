namespace API.Models
{
    public class Factura
    {
        public int num_asientos { get; set; }
        public int ID { get; set; }
        public int Cedula  { get; set; }
        //public int Sala { get; set; }
        public int Precio { get; set; }
        public int Total { get; set; }
        public Sucursales sucursal { get; set; }
        public Cliente cliente { get; set; }

    }
}
