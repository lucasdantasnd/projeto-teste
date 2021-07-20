using Project.Domain.Entities;

namespace Project.Domain.Repositories
{
    public interface IUserRepository
    {
        void Create(User user);
        void Update(User user);
    }
}
