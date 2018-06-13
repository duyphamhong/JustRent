using System;
using System.Collections.Generic;

namespace SV.DataAccess.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime? CreateDate { get; set; }
    }
}
