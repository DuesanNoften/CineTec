namespace API.Models
{
    public class Salas
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Row { get; set; }
        public int Column { get; set; }
        public int Capacity { get; set; }
        public Proyeccion proyeccion { get; set; }
        public Sucursales sucursales { get; set; }


    }
}
