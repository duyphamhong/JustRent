using SV.Common.Bases.BaseMessage;
using SV.Common.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace SV.Common.Messages.Account
{
    /// <summary>
    /// RegisterUserBaseResponse
    /// </summary>
    public class RegisterUserBaseResponse : BaseResponse<ResponseStatus>
    {
        public string UserName { get; set; }
        public string AccessToken { get; set; }
        public object Errors { get; set; }
    }
}
