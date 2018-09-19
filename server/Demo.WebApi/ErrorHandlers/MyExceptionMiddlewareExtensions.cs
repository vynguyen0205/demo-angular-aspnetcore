using Microsoft.AspNetCore.Builder;

namespace Demo.WebApi.ErrorHandlers
{
    public static class MyExceptionMiddlewareExtensions
    {
        public static IApplicationBuilder UseHttpStatusCodeExceptionMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<MyExceptionMiddleware>();
        }
    }
}
