using System.ComponentModel.DataAnnotations;

namespace InventoryManegment.Models;

public enum Roles{
    Admin,
    Supplier,
    Salepersion,
    Customer,
}

public class UsersModel{
    [Display(Name = "Id")]
    public int Id { get; set; }

    public Roles Role { get; set; }

    [Display(Name = "First Name")]
    [Required (ErrorMessage = "First Name is required")]
    [StringLength(12, MinimumLength = 3, ErrorMessage = "First Name must be between 3 and 12 characters")]
    [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "First Name can only contain letters")]
    public string? FirstName { get; set; }

    [Display(Name = "Middle Name")]
    [StringLength(12, MinimumLength = 3, ErrorMessage = "Middle Name must be between 3 and 12 characters")]
    [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Middle Name can only contain letters")]
    [Required (ErrorMessage = "Middle Name is required")]
    public string? MiddleName { get; set; }

    [Display(Name = "Last Name")]
    [Required (ErrorMessage = "Last Name is required")]
    [StringLength(12, MinimumLength = 3, ErrorMessage = "Last Name must be between 3 and 12 characters")]
    [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Last Name can only contain letters")]
    public string? LastName { get; set; }

    [Display(Name = "Mobile")]
    [Required (ErrorMessage = "Mobile is required")]
    [StringLength(10, MinimumLength = 10, ErrorMessage = "Mobile must be 11 characters")]
    [RegularExpression(@"^[0-9]+$", ErrorMessage = "Mobile can only contain numbers")]
    public string? Mobile { get; set; }

    [Display(Name = "Email")]
    [Required (ErrorMessage = "Email is required")]
    [RegularExpression(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", ErrorMessage = "Invalid Email")]
    [DataType(DataType.EmailAddress) ]
    public string? Email { get; set; }

    [Display(Name = "Password")]
    public string? PasswordHash { get; set; }

    [Display(Name = "Registered At")]
    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    public DateTime RegisteredAt { get; set; }

    [Display(Name = "Last Login")]
    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    public DateTime? LastLogin { get; set; }

    public List<UsersModel>? Users { get; set; }

}