using SV.Common.Messages.PhoneContact;

namespace SV.DataAccess.Interfaces
{
    public interface IPhoneContactDataAccess
    {
        GetAllEmployeeResponse GetAllEmployee(GetAllEmployeeRequest request);
    }
}
