using Demo.Data.Entities;
using Demo.Service.Dtos;
using System.Collections.Generic;

namespace Demo.Service.BusinessServices
{
    public interface IPersonService
    {
        IEnumerable<Person> GetAll();

        Person GetById(int id);

        Person Add(PersonDto model);

        Person Update(PersonDto model);
    }
}
