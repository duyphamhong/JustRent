using System;
using System.Collections.Generic;
using System.Text;

namespace SV.Common.Mapper
{
    public class BaseMappingExtension<T> where T : BaseAutoMapperConfiguration, new()
    {
        public TDestination MapTo<TSource, TDestination>(TSource source)
        {
            return PrivateMapper<T>.Mapper.Map<TSource, TDestination>(source);
        }

        public TDestination MapTo<TSource, TDestination>(TSource source, TDestination destination)
        {
            return PrivateMapper<T>.Mapper.Map(source, destination);
        }
    }
}
