using System;
using System.Collections.Generic;
using System.Text;

namespace SV.Common.Bases.Mapper
{
    public class BusinessLogicBase<T> where T : MapperBase
    {
        /// <summary>
        /// Private Mapper of Bussiness Logic
        /// </summary>
        public T PrivateMapper { get; set; }

        /// <summary>
        /// Initialize a new instance of <see cref="BusinessLogicBase{T}" /> class.
        /// </summary>
        public BusinessLogicBase()
        {
            PrivateMapper = Activator.CreateInstance<T>();

            PrivateMapper.RegisterMapper();
        }
    }
}
