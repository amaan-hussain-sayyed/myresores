using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using InventoryManegment.Models;

namespace InventoryManegment.Controllers;

public class RegisterController : Controller
{
    private readonly ILogger<RegisterController> _logger;

    public RegisterController(ILogger<RegisterController> logger){
        _logger = logger;
    }

    // GET /UserRegister/
    public string status ="";

    public ActionResult Index(){
        Console.WriteLine("hello world");
        return View();
    }

    // POST /UserRegister/
    [HttpPost]
    public ActionResult Index(UsersModel user){
        if(ModelState.IsValid){
            status = "User Registration Successful";
            Console.WriteLine("this action 1 is runnig");
           
            return View("Login");
        }
        status = "User Registration Failed";
        Console.WriteLine(user);
        return View();
    }
    
}