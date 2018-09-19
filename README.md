# Brief
A demo project for Angular 4 and ASP.NET Core 2.0 Integration

# Demo deployment
You can try the application here: https://vynguyen0205-angular-aspnet.azurewebsites.net/

# Steps to run back-end
- Make sure that you have .NET Core 2.0 installed.
- Open the solution file, restore all the packages from Nuget, and make sure that you can build the solution successfully.
- Create an empty SQL Server database.
- Replace the connection string in appsettings.json with your own.
- Run migrations on the database ("update-database" command on the Package Manager)
- Now run the Demo.WebApi project
- Check http://localhost:yourport/apis/persons. If it succeeds it means everything is connected correctly.

# Steps to run front-end
- Make sure you have the npm and the latest angular-cli installed.
- Open command line at the root of the project and run "npm install" to restore all the packages from npm
- Run "npm run start" to serve the application live. By default the app is served at http://localhost:4200/.
- Run "npm run build" to build the application (compiling, uglifying and bundling). The bundled files will be found at /dist folder.
- If you need to change the end-point of the backend, you can change it in index.html.
