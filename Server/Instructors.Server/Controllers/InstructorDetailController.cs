namespace Instructors.Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Instructors.Server.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class InstructorDetailController : ControllerBase
    {
        private readonly InstructorDetailContext _context;

        public InstructorDetailController(InstructorDetailContext context)
        {
            _context = context;
        }

        // GET: api/InstructorDetail
        [HttpGet]
        public IEnumerable<InstructorDetail> GetInstructorDetails()
        {
            return _context.InstructorDetails;
        }

        // GET: api/InstructorDetail/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInstructorDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var instructorDetail = await _context.InstructorDetails.FindAsync(id);

            if (instructorDetail == null)
            {
                return NotFound();
            }

            return Ok(instructorDetail);
        }

        // PUT: api/InstructorDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInstructorDetail([FromRoute] int id, [FromBody] InstructorDetail instructorDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != instructorDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(instructorDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InstructorDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InstructorDetail
        [HttpPost]
        public async Task<IActionResult> PostInstructorDetail([FromBody] InstructorDetail instructorDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.InstructorDetails.Add(instructorDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInstructorDetail", new { id = instructorDetail.Id }, instructorDetail);
        }

        // DELETE: api/InstructorDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInstructorDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var instructorDetail = await _context.InstructorDetails.FindAsync(id);
            if (instructorDetail == null)
            {
                return NotFound();
            }

            _context.InstructorDetails.Remove(instructorDetail);
            await _context.SaveChangesAsync();

            return Ok(instructorDetail);
        }

        private bool InstructorDetailExists(int id)
        {
            return _context.InstructorDetails.Any(e => e.Id == id);
        }
    }
}