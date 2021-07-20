using Flunt.Notifications;
using Flunt.Validations;
using Project.Domain.Commands.Interfaces;
using System;


namespace Project.Domain.Commands
{
    public class DeleteUserCommand : Notifiable, ICommand
    {
        public Guid Id { get; set; }

        public void Validate()
        {
            AddNotifications(
            new Contract()
                .Requires());
        }
    }
}
