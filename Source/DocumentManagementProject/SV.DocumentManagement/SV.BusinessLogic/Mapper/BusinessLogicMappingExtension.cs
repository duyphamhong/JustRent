using SV.Common.Mapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace SV.BusinessLogic.Mapper
{
    public static class BusinessLogicMappingExtension
    {
        private static readonly BaseMappingExtension<BusinessLogicMapperConfig> Mapper =
            new BaseMappingExtension<BusinessLogicMapperConfig>();
    }
}
