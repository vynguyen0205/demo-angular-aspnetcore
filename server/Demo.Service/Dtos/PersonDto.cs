using System.ComponentModel.DataAnnotations;

namespace Demo.Service.Dtos
{
    public class PersonDto
    {
        [Required]
        public int PersonId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [Range(0, 150)]
        public int Age { get; set; }

        [Required]
        [StringLength(50)]
        public string Address { get; set; }
    }
}
