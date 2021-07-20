using Flunt.Notifications;
using Project.Domain.Commands;
using Project.Domain.Commands.Interfaces;
using Project.Domain.Entities;
using Project.Domain.Handlers.Interfaces;
using Project.Domain.Repositories;

namespace Project.Domain.Handlers
{
    public class UserHandler : Notifiable,
        IHandler<CreateUserCommand>
    {
        private readonly IUserRepository _userRepository;

        public UserHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public ICommandResult Handle(CreateUserCommand command)
        {
            command.Validate();
            if (command.Invalid)
                return new CommandResult(false, "usuário inválido", command.Notifications);

            var user = new User(command.Name, command.Email);
            _userRepository.Create(user);
            return new CommandResult(true, "usuário cadastrado com sucesso", user);
        }
    }
}
