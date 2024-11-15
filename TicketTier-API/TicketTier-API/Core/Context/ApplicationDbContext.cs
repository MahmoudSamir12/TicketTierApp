using Microsoft.EntityFrameworkCore;
using TicketTier_API.Core.Entities;

namespace TicketTier_API.Core.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Ticket> Tickets { get; set; }

    }
}
