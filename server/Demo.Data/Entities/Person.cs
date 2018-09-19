using System.ComponentModel.DataAnnotations;

namespace Demo.Data.Entities
{
    public class Person
    {
        public int PersonId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        [StringLength(50)]
        public string Address { get; set; }
    }
}
