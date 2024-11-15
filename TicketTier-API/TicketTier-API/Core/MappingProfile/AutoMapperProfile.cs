using AutoMapper;
using TicketTier_API.Core.DTOs;
using TicketTier_API.Core.Entities;

namespace TicketTier_API.Core.MappingProfile
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<TicketDto, Ticket>();
            CreateMap<Ticket, GetTicketDto>();
            CreateMap<UpdateTicketDto, Ticket>();
        }
    }
}
