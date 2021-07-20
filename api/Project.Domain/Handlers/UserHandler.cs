using Flunt.Notifications;
using Project.Domain.Commands;
using Project.Domain.Commands.Interfaces;
using Project.Domain.Entities;
using Project.Domain.Handlers.Interfaces;
using Project.Domain.Repositories;

namespace Project.Domain.Handlers
{
    public class UserHandler : Notifiable,
        IHandler<CreateUserCommand>,
        IHandler<UpdateUserCommand>,
        IHandler<DeleteUserCommand>
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
                return new CommandResult(false, "Informações do usuário inválida", command.Notifications);

            var user = new User(command.Name, command.Email);
            _userRepository.Create(user);
            return new CommandResult(true, "usuário cadastrado com sucesso", user);
        }

        public ICommandResult Handle(UpdateUserCommand command)
        {
            command.Validate();
            if (command.Invalid)
                return new CommandResult(false, "Informações do usuário inválida", command.Notifications);

            var user = _userRepository.GetById(command.Id);
            user.UpdateUser(command.Name, command.Email);
            _userRepository.Update(user);

            return new CommandResult(true, "usuário atualizado com sucesso", user);
        }

        public ICommandResult Handle(DeleteUserCommand command)
        {
            command.Validate();
            if (command.Invalid)
                return new CommandResult(false, "usuário inválido", command.Notifications);

            var user = _userRepository.GetById(command.Id);
            _userRepository.Delete(user);

            return new CommandResult(true, "usuário removido com sucesso", null);
        }
    }
}
