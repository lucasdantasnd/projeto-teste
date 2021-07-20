using Project.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Project.Domain.Repositories
{
    public interface IUserRepository
    {
        void Create(User user);
        void Update(User user);
        void Delete(User user);
        User GetById(Guid id);
        IEnumerable<User> GetAll();
    }
}
