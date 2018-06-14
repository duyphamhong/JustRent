using System;
using System.Collections.Generic;
using System.Text;

namespace SV.Common.Bases.Mapper
{
    public class DataAccessBase<T> where T : MapperBase
    {
        /// <summary>
        /// Private Mapper of Bussiness Logic
        /// </summary>
        public T PrivateMapper { get; set; }

        protected static readonly log4net.ILog Log =
            log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        /// <summary>
        /// Initialize a new instance of <see cref="BusinessLogicBase{T}" /> class.
        /// </summary>
        public DataAccessBase()
        {
            PrivateMapper = Activator.CreateInstance<T>();
            PrivateMapper.RegisterMapper();
        }
    }
}
