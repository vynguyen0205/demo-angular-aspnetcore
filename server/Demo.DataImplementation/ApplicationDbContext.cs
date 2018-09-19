using Demo.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Demo.DataImplementation
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Person> Persons { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
