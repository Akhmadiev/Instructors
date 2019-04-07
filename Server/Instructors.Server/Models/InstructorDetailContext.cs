namespace Instructors.Server.Models
{
    using Microsoft.EntityFrameworkCore;

    public class InstructorDetailContext : DbContext
    {
        public InstructorDetailContext(DbContextOptions<InstructorDetailContext> options) : base(options)
        {

        }

        public DbSet<InstructorDetail> InstructorDetails { get; set; }
    }
}
