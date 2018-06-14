using AutoMapper;
using AutoMapper.Configuration;

namespace SV.Common.Mapper
{
    public abstract class PrivateMapper<TMapperConfiguration>
        where TMapperConfiguration : BaseAutoMapperConfiguration, new()
    {
        private static MapperConfiguration _mapperConfiguration;
        private static IMapper _mapper;
        private static readonly object SLockObject = new object();

        /// <summary>
        /// Mapper
        /// </summary>
        public static IMapper Mapper
        {
            get
            {
                if (_mapper == null)
                {
                    lock (SLockObject)
                    {
                        if (_mapper == null)
                        {
                            var mapperConfiguration = new TMapperConfiguration();
                            var config = new MapperConfigurationExpression();
                            mapperConfiguration.CreateMaps(config);
                            _mapperConfiguration = new MapperConfiguration(config);
                            _mapper = _mapperConfiguration.CreateMapper();

                        }
                    }
                }

                return _mapper;
            }
        }
    }
}