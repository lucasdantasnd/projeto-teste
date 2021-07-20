namespace Project.Domain.Entities
{
    public class User : Entity
    {
        public User(string name, string email)
        {
            Name = name;
            Email = email;
        }

        public string Name { get; private set; }
        public string Email { get; private set; }
    }
}
