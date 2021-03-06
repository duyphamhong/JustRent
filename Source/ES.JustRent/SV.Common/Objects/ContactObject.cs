﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SV.Common.Objects
{
    public class ContactObject
    {
        public int ContactId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int CountTotal { get; set; }
    }
}
