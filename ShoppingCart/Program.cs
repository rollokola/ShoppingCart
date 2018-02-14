using System;
using System.Collections.Generic;
using System.IO;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace ShoppingCart
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            //if (environment == EnvironmentName.Development)
            //{
                BuildWebHost(args).Run();
            //}
            //else
            //{
            //    var pathToExe = Process.GetCurrentProcess().MainModule.FileName;
            //    var pathToContentRoot = Path.GetDirectoryName(pathToExe);
            //    BuildWebHost(args, pathToContentRoot).RunAsService();
            //}
            //BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
               .UseUrls("http://localhost:5000", "http://ksd105:5000")
                .Build();

        public static IWebHost BuildWebHost(string[] args, string pathToContentRoot) =>

           WebHost.CreateDefaultBuilder(args)
               .ConfigureLogging((host, builder) =>
               {
                //   host.HostingEnvironment.ConfigureNLog("nlog.config");
                   builder.SetMinimumLevel(LogLevel.Trace);
               })
               .UseContentRoot(pathToContentRoot)
               .UseStartup<Startup>()
               .UseUrls("http://localhost:5001", "http://ksd105:5001")
               .Build();
    }
}
