using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace SV.Common.Mapper
{
    public abstract class BaseAutoMapperConfiguration
    {
        public abstract void CreateMaps(IMapperConfigurationExpression configuration);
    }
    
}
