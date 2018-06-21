using SV.Common.Messages.PhoneContact;
using System;
using System.Collections.Generic;
using System.Text;

namespace SV.BusinessLogic.Interfaces
{
    public interface IPhoneContactBusinessLogic
    {
        GetAllEmployeeResponse GetAllEmployee(GetAllEmployeeRequest request);
    }
}
