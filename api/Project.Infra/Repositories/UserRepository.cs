using Microsoft.EntityFrameworkCore;
using Project.Domain.Entities;
using Project.Domain.Queries;
using Project.Domain.Repositories;
using Project.Infra.Context;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Project.Infra.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public void Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Update(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.AsNoTracking();
        }

        public User GetById(Guid id)
        {
            return _context.Users.FirstOrDefault(UserQueries.GetById(id));
        }

        public bool GetByEmail(string email)
        {
            return _context.Users.Any(UserQueries.GetByEmail(email));
        }

        public void Delete(User user)
        {
            _context.Users.Remove(user);
            _context.SaveChanges();
        }

    }
}
