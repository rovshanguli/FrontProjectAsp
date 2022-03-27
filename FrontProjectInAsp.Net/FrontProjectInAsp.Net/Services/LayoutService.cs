using FrontProjectInAsp.Net.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FrontProjectInAsp.Net.Services
{
    public class LayoutService
    {
        private readonly AppDbContext _context;
        public LayoutService(AppDbContext context)
        {
            _context = context; 
        }

        public Dictionary<string,string> GetSettings()
        {
            Dictionary<string, string> settings = _context.Settings.AsEnumerable().ToDictionary(m => m.Key, m => m.value);
            return settings;
        }
    }
}
