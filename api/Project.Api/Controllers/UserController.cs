using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Api.Models;
using Project.Domain.Commands;
using Project.Domain.Entities;
using Project.Domain.Handlers;
using Project.Domain.Repositories;
using System;
using System.Collections.Generic;

namespace Project.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IMapper _mapper;
        public UsersController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [Route("create")]
        [HttpPost]
        public CommandResult Create([FromBody] NewUser newUser,
            [FromServices] UserHandler handler)
        {
            // exemplo com autoMapper;
            var command = _mapper.Map<CreateUserCommand>(newUser);
            return (CommandResult)handler.Handle(command);
        }

        [Route("update")]
        [HttpPut]
        public CommandResult Update([FromBody] UpdateUserCommand command,
           [FromServices] UserHandler handler)
        {
            return (CommandResult)handler.Handle(command);
        }

        [Route("delete")]
        [HttpPut]
        public CommandResult Delete([FromBody] DeleteUserCommand command,
          [FromServices] UserHandler handler)
        {
            return (CommandResult)handler.Handle(command);
        }

        [Route("all")]
        [HttpGet]
        public IEnumerable<User> GetAll([FromServices] IUserRepository repository)
        {
            return repository.GetAll();
        }


        [HttpGet("{id}")]
        public ActionResult<User> GetById(Guid id, [FromServices] IUserRepository repository)
        {
            var result = repository.GetById(id);

            if (result == null)
                return NotFound();

            return result;
        }
    }
}
