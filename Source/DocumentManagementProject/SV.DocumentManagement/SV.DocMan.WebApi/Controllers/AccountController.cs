using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SV.Common.Constants;
using SV.Common.Messages.Account;

namespace SV.DocMan.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;

        public AccountController(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            IConfiguration configuration
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("Login")]
        public async Task<LoginResponse> Login(LoginDto model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.UserName == model.UserName);
                string token = await GenerateJwtToken(model.UserName, appUser);
                return new LoginResponse
                {
                    Status = ResponseStatus.Susscess,
                    AccessToken = token,
                    UserName = appUser.UserName
                };
            } else
            {
                return new LoginResponse
                {
                    Status = ResponseStatus.Fail,
                    Errors = result
                };
            }

            throw new ApplicationException("INVALID_LOGIN_ATTEMPT");
        }

        [HttpGet]
        [Route("Register")]
        public async Task<RegisterUserBaseResponse> RegisterAsync(RegisterDto model)
        {
            var user = new IdentityUser
            {
                UserName = model.UserName,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                var token =  await GenerateJwtToken(model.UserName, user);
                return new RegisterUserBaseResponse {
                    Status = ResponseStatus.Susscess,
                    AccessToken = token,
                    UserName = user.UserName
                };
            }
            else
            {
                return new RegisterUserBaseResponse
                {
                    Status = ResponseStatus.Fail,
                    Errors = result.Errors
                };
            }
        }

        private async Task<string> GenerateJwtToken(string userName, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public class LoginDto
        {
            [Required(ErrorMessage ="UserName là bắt buộc")]
            public string UserName { get; set; }

            [Required(ErrorMessage = "Mật khẩu là bắt buộc")]
            public string Password { get; set; }
        }

        public class RegisterDto
        {
            [Required]
            public string Email { get; set; }

            [Required]
            public string UserName { get; set; }

            [Required]
            [StringLength(100, ErrorMessage = "PASSWORD_MIN_LENGTH", MinimumLength = 6)]
            public string Password { get; set; }
        }
    }
}