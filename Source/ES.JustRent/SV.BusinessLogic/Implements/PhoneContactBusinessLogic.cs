using SV.BusinessLogic.Bases;
using SV.BusinessLogic.Interfaces;
using SV.Common.Messages.PhoneContact;
using SV.DataAccess.Interfaces;
using System;

namespace SV.BusinessLogic.Implements
{
    public class PhoneContactBusinessLogic : BaseBusinessLogic, IPhoneContactBusinessLogic
    {
        private readonly IPhoneContactDataAccess _dataAccess;
        public PhoneContactBusinessLogic(IPhoneContactDataAccess dataAccess)
        {
            _dataAccess = dataAccess;
        }

        public GetAllEmployeeResponse GetAllEmployee(GetAllEmployeeRequest request)
        {
            return _dataAccess.GetAllEmployee(request);
        }
    }
}
