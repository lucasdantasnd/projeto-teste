using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Project.Domain.Entities;

namespace Project.Infra.Mappings
{
    public class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.Property(x => x.Id);
            builder.Property(x => x.Name).HasMaxLength(120).HasColumnType("varchar(120)");
            builder.Property(x => x.Email).HasMaxLength(160).HasColumnType("varchar(160)");
        }
    }
}
