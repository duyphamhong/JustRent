using Dapper;
using SV.Common.Constants;
using SV.Common.Messages.PhoneContact;
using SV.Common.Objects;
using SV.DataAccess.Bases;
using SV.DataAccess.Interfaces;
using SV.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SV.DataAccess.Implements
{
    public class PhoneContactDataAccess : BaseDataAccess, IPhoneContactDataAccess
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public GetAllEmployeeResponse GetAllEmployee(GetAllEmployeeRequest request)
        {
            try
            {
                // trong Store em đang để so sánh với điều kiện @keyword = '' nên có đoạn gắn giá trị trống này cho tham số Keyword
                if (String.IsNullOrEmpty(request.Keyword))
                {
                    request.Keyword = "";
                }
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@keyword", request.Keyword);
                parameters.Add("@pageindex", request.PageIndex);
                parameters.Add("@pagesize", request.PageSize);
                using (var context = new PhoneBookContext())
                {
                    List<ContactObject> result = context.Contacts.Select(c => new ContactObject {
                        ContactId = c.ContactId,
                        Email = c.Email
                    }).ToList();
                    return new GetAllEmployeeResponse
                    {
                        Status = ResponseStatus.Susscess,
                        Contacts = result
                    };
                }

            }
            catch (Exception ex)
            {
                return new GetAllEmployeeResponse
                {
                    Status = ResponseStatus.Fail,
                    Message = ex.Message
                };
            }
        }
    }
}
