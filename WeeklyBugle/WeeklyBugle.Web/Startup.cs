using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WeeklyBugle.Web.Startup))]
namespace WeeklyBugle.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
