using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ShoppingCart.Controllers
{
    public class HomeController : Controller
    {
        private readonly IOptions<BackendOptions> _backendOptions;
        public HomeController(IOptions<BackendOptions> backendOptions)
        {
            _backendOptions = backendOptions;
        }

        public IActionResult Index()
        {
            ViewBag.Address = _backendOptions.Value.Address;
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
