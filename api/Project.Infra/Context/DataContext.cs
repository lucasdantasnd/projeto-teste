using Microsoft.EntityFrameworkCore;
using Project.Domain.Entities;

namespace Project.Infra.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<User>().Property(x => x.Id);
            modelBuilder.Entity<User>().Property(x => x.Name).HasMaxLength(120).HasColumnType("varchar(120)");
            modelBuilder.Entity<User>().Property(x => x.Email).HasMaxLength(160).HasColumnType("varchar(160)");
        }

    }
}
