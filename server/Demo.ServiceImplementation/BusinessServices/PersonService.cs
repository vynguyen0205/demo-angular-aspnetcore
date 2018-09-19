using System;
using System.Collections.Generic;
using System.Linq;
using Demo.Data.Entities;
using Demo.Data.Interfaces;
using Demo.Service.BusinessServices;
using Demo.Service.Dtos;

namespace Demo.ServiceImplementation.BusinessServices
{
    public class PersonService: IPersonService
    {
        private readonly IUnitOfWork _unitOfWork;

        public PersonService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public Person Add(PersonDto model)
        {
            var newPerson = new Person
            {
                Name = model.Name,
                Address = model.Address,
                Age = model.Age
            };

            _unitOfWork.PersonRepository.Add(newPerson);
            _unitOfWork.SaveChange();

            return newPerson;
        }

        public IEnumerable<Person> GetAll()
        {
            var listOfPersons = _unitOfWork.PersonRepository.All().OrderByDescending(p => p.PersonId);

            return listOfPersons;
        }

        public Person GetById(int id)
        {
            var person = _unitOfWork.PersonRepository.FindBy(p => p.PersonId == id).FirstOrDefault();

            if (person == null)
            {
                throw new ArgumentNullException($"Person with ID {id} cannot be found.");
            }

            return person;
        }

        public Person Update(PersonDto model)
        {
            var person = _unitOfWork.PersonRepository.FindBy(p => p.PersonId == model.PersonId).FirstOrDefault();

            if (person == null)
            {
                throw new ArgumentNullException($"Person with ID {model.PersonId} cannot be found.");
            }

            person.Name = model.Name;
            person.Age = model.Age;
            person.Address = model.Address;

            _unitOfWork.PersonRepository.Update(person);
            _unitOfWork.SaveChange();

            return person;
        }
    }
}
