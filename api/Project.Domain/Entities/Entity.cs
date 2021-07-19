using System;

namespace Project.Domain.Entities
{
    public abstract class Entity
    {
        public Entity(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; private set; }

    }
}
