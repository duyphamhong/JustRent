using SV.Common.Bases.BaseMessage;

namespace SV.Common.Messages.PhoneContact
{
    public class GetAllEmployeeRequest : BaseRequest
    {
        public string Keyword { get; set; }
        public int PageIndex { get; set; }
        public string PageSize { get; set; }
    }
}
