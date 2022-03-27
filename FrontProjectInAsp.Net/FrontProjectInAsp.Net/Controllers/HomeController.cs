using FrontProjectInAsp.Net.Data;
using FrontProjectInAsp.Net.Models;
using FrontProjectInAsp.Net.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FrontProjectInAsp.Net.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }

        
        public async Task<IActionResult> Index()
        {
            List<Slider> sliders =await  _context.Sliders.ToListAsync();

            HomeVM homeVM = new HomeVM
            {
                Sliders = sliders,
               
            };
            return View(homeVM);
        }
    }
}
