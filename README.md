# Laravel Angular Boiler Plate  

This project gives you a very simple **Laravel Angular project** to build on for your development needs where laravel serves as
api backend and angular as SPA frontend.

**In my humble opinion, I CANNOT EMPHASIS enough that** that it is best to have two separate repo for your api and front-end project. 
This is the preferred approach and has many benefits like 

- Multiple teams can easily work on different repos
- Smaller repo and easier to manage
- Your PhpStorm does not bog down loading and indexing a huge project
- Finally, dont listen to my opinion (_which is humble_), instead listen to experience from amazon, they broke their huge project into microservices.
 
Having said that, sometimes the project is so small that it does not make sense to have separate repo. For such cases, here we go :-)

### Overview

I was learning webpack from Laracasts' videos and got inspired, I used the idea where we use webpack move angular build to 
laravel views and public folder besides building angular project.  

AT the moment this project only has one frontend app, named **ng-frontend**, but you can have multiple separate apps running under 
folder angular-app.

### Setting Up  

After you have cloned the code, you need to install required dependencies for Laravel and angular. In order to do that run.  

```
cd <your-directory>
composer install
```

Than install JavaScript dependencies with **npm**.  

```
npm install
```

Make a copy of .env.example and rename it to `.evn` Edit the file to have required MySQL information.

Then create auth keys so that Laravel does not cry about keys, _ciphers are AES-128-CBC and AES-256-CBC_ 

```
php artisan key:generate
php artisan config:clear
```

Last step is to run migration script with this command

```
php artisan migrate
```

Now **Laravel** side is complete, move forward and now cd into the angular project.

```
cd angular-app/ng-frontend
npm install
```
### Running for development

In the angular run command is `ng serve`
In laravel run command is `php artisan serve`

### Running for production

Build angular project by running command `npm run build`

What it does is, it compiles angular project and copy assets and ng-frontend-template to `/resources/views` as `ng-frontend.blade.php`

This way your angular project is available as a view and you dont have to worry about the baseUrl which is automatically updated to route name defined in `web.php`

## License  

MIT  

_Courtesy: Big thanks to Toni Romic for his work which helped me a lot_