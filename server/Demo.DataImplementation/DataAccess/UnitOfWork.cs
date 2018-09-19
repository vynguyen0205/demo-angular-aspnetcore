using System.Threading.Tasks;
using Demo.Data.Entities;
using Demo.Data.Interfaces;

namespace Demo.DataImplementation.DataAccess
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfWork(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void SaveChange()
        {
            _dbContext.SaveChanges();
        }

        public async Task SaveChangeAsync()
        {
            await _dbContext.SaveChangesAsync();
        }

        private IRepository<Person> _personRepository;
        public IRepository<Person> PersonRepository
        {
            get
            {
                return _personRepository = _personRepository ?? new EfRepository<Person>(_dbContext);
            }
        }

        // More repositories here
    }
}
