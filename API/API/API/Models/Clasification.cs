namespace API.Models
{
    public class Clasification
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public Peliculas pelicula { get; set; }

    }
}
