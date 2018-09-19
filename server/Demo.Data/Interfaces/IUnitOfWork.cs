using Demo.Data.Entities;
using System.Threading.Tasks;

namespace Demo.Data.Interfaces
{
    public interface IUnitOfWork
    {
        void SaveChange();

        Task SaveChangeAsync();

        IRepository<Person> PersonRepository { get; }

        // More repositories here
    }
}
