using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketTier_API.Core.Context;
using TicketTier_API.Core.DTOs;
using TicketTier_API.Core.Entities;

namespace TicketTier_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public TicketsController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //=======================================================================================

        [HttpGet]
        [Route("GetAllTickets")]
        public async Task<ActionResult<IEnumerable<GetTicketDto>>> GetTickets(string? search)
        {
            IQueryable<Ticket> SearchTickets = _context.Tickets;
            if(search != null)
            {
                SearchTickets = SearchTickets.Where(t => t.PassengerName.Contains(search));
            }

            var tickets = await SearchTickets.ToListAsync();
            var result = _mapper.Map<IEnumerable<GetTicketDto>>(tickets);
            return Ok(result);

            //var tickets = await _context.Tickets.ToListAsync();
            //var result = _mapper.Map<IEnumerable<GetTicketDto>>(tickets);
            //return Ok(result);
        }

        //========================================================================================

        [HttpGet]
        [Route("GetTicketById/{Id}")]
        public async Task<ActionResult<GetTicketDto>> GetTicketById(int Id)
        {
            var ticket = await _context.Tickets.FirstOrDefaultAsync(tic => tic.Id == Id);
            if(ticket == null)
            {
                return NotFound("Ticket Not Found");
            }
            var result = _mapper.Map<GetTicketDto>(ticket);
            return Ok(result);
        }

        //==========================================================================================

        [HttpPost]
        [Route("CreateTicket")]
        public async Task<IActionResult> CreateTicket([FromBody] TicketDto ticketDto)
        {
            var newTicket = new Ticket();
            _mapper.Map(ticketDto, newTicket);
            await _context.Tickets.AddAsync(newTicket);
            await _context.SaveChangesAsync();

            return Ok("Ticket Saved Successfully");
        }

        //==========================================================================================

        [HttpPut]
        [Route("EditTicket/{Id}")]
        public async Task<IActionResult> UpdateTicket(int Id, [FromBody]UpdateTicketDto updateTicketDto)
        {
            var existingTicket = await _context.Tickets.FirstOrDefaultAsync(t => t.Id == Id);
            if(existingTicket == null)
            {
                return NotFound("Ticket Not Found");
            }

            _mapper.Map(updateTicketDto, existingTicket);
            existingTicket.UpdatedAt = DateTime.Now;

            await _context.SaveChangesAsync();
            return Ok("Ticket Updated Successfully");
        }

        //==========================================================================================

        [HttpDelete]
        [Route("DeleteTicketById/{Id}")]
        public async Task<IActionResult> DeleteTicket(int Id)
        {
            var existingTicket = await _context.Tickets.FirstOrDefaultAsync(t => t.Id == Id);
            if (existingTicket == null)
            {
                return NotFound("Ticket Not Found");
            }

            _context.Tickets.Remove(existingTicket);
            await _context.SaveChangesAsync();

            return Ok("Ticket Deleted Successfully");
        }

    }
}
