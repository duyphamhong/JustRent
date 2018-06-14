using SV.Common.Mapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace SV.DataAccess.Mapper
{
    public static class DataAccessMappingExtension
    {
        private static readonly BaseMappingExtension<DataAccessMapperConfig> Mapper = new BaseMappingExtension<DataAccessMapperConfig>();
    }
}
