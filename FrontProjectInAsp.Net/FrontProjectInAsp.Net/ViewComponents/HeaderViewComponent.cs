using FrontProjectInAsp.Net.Data;
using FrontProjectInAsp.Net.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontProjectInAsp.Net.ViewComponents
{
    public class HeaderViewComponent : ViewComponent
    {
        private readonly AppDbContext _context;

        public HeaderViewComponent(AppDbContext context)
        {
            _context = context;
        }


        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<Catagory> catagories = await _context.Catagories.ToListAsync();

            return await (Task.FromResult(View(catagories)));
        }
    }
}
