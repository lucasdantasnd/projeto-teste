using Flunt.Notifications;
using Flunt.Validations;
using Project.Domain.Commands.Interfaces;

namespace Project.Domain.Commands
{
    public class CreateUserCommand : Notifiable, ICommand
    {
        public CreateUserCommand() { }

        public CreateUserCommand(string name, string email)
        {
            Name = name;
            Email = email;
        }

        public string Name { get; set; }
        public string Email { get; set; }

        public void Validate()
        {
            AddNotifications(
              new Contract()
                  .Requires()
                  .HasMinLen(Name, 3, "Name", "Nome inválido")
                  .IsEmail(Email, "Email", "E-mail inválido")
            );
        }

    }
}
