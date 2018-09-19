using Demo.Data.Interfaces;
using Demo.DataImplementation.DataAccess;
using Demo.Service.BusinessServices;
using Demo.ServiceImplementation.BusinessServices;
using Microsoft.Extensions.DependencyInjection;

namespace Demo.WebApi.Configs
{
    public static class DiConfiguration
    {
        public static void SetUp(IServiceCollection services)
        {
            //Set up data access classes
            SetUpDataAccess(services);

            //Set up services
            SetUpServices(services);
        }

        private static void SetUpDataAccess(IServiceCollection services)
        {
            services.AddTransient(typeof(IRepository<>), typeof(EfRepository<>));
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }

        private static void SetUpServices(IServiceCollection services)
        {
            services.AddScoped<IPersonService, PersonService>();
        }
    }
}
