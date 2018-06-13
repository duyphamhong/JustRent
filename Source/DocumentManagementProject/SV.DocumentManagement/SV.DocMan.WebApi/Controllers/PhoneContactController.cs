using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SV.BusinessLogic.Interfaces;
using SV.Common.Messages.PhoneContact;

namespace SV.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/PhoneContact")]
    [Authorize]
    public class PhoneContactController : Controller
    {
        private readonly IPhoneContactBusinessLogic _business;
        public PhoneContactController(IPhoneContactBusinessLogic business)
        {
            _business = business;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("Index")]
        [Authorize]
        public GetAllEmployeeResponse Index(GetAllEmployeeRequest request)
        {
            return _business.GetAllEmployee(request);
        }
    }
}