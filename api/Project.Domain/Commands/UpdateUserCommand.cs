using Flunt.Notifications;
using Flunt.Validations;
using Project.Domain.Commands.Interfaces;
using System;

namespace Project.Domain.Commands
{
    public class UpdateUserCommand : Notifiable, ICommand
    {
        public UpdateUserCommand() { }

        public UpdateUserCommand(Guid id, string name, string email)
        {
            Id = id;
            Name = name;
            Email = email;
        }

        public Guid Id { get; set; }
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
