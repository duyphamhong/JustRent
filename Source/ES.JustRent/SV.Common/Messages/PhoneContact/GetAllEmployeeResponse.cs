using SV.Common.Bases.BaseMessage;
using SV.Common.Constants;
using SV.Common.Objects;
using System.Collections.Generic;

namespace SV.Common.Messages.PhoneContact
{
    public class GetAllEmployeeResponse : BaseResponse<ResponseStatus>
    {
        public List<ContactObject> Contacts { get; set; }
    }
}
