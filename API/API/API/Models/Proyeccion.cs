namespace API.Models
{
    public class Proyeccion
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public DateTime Hour { get; set; }
        //public string Movie { get; set; }
        public ICollection<Peliculas> movies { get; set; }
        public Salas sala { get; set; }
    }
}
