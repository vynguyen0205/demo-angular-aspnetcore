using Demo.Service.BusinessServices;
using Demo.Service.Dtos;
using Demo.WebApi.DataValidations;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Demo.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Persons")]
    public class PersonsController : Controller
    {
        private readonly IPersonService _personService;

        public PersonsController(IPersonService personService)
        {
            _personService = personService;
        }

        // GET: api/Persons
        [HttpGet]
        public IActionResult Get()
        {
            var listOfPersons = _personService.GetAll();

            return Ok(listOfPersons);
        }

        // GET: api/Persons/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var person = _personService.GetById(id);

            return Ok(person);
        }
        
        // POST: api/Persons
        [HttpPost]
        [ValidateModelState] // Validate model before executing the action
        public IActionResult Post([FromBody]PersonDto model)
        {
            var newPerson = _personService.Add(model);

            return Ok(newPerson);
        }
        
        // PUT: api/Persons/5
        [HttpPut("{id}")]
        [ValidateModelState] // Validate model before executing the action
        public IActionResult Put(int id, [FromBody]PersonDto model)
        {
            var updatedPerson = _personService.Update(model);

            return Ok(updatedPerson);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
