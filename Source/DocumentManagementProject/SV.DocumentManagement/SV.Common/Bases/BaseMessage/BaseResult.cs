using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
namespace SV.Common.Bases.BaseMessage
{
    public class BaseResult<T>
    {
        /// <summary>
        /// ResponseMessage
        /// </summary>
        public string Message { get; set; }
        /// <summary>
        /// Status of response 
        /// </summary>
        public T Status { get; set; }
    }
}
