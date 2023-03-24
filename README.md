https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/

<!-- npx nx generate @nrwl/workspace:lib models --directory=domain/products --tags=domain --importPath=@sherpa/products/models --buildable
npx nx generate @nrwl/workspace:lib services --directory=domain/products --tags=domain --importPath=@sherpa/products/services --buildable
npx nx generate @nrwl/workspace:lib interfaces --directory=domain/products --tags=domain --importPath=@sherpa/products/interfaces --buildable
npx nx generate @nrwl/workspace:lib services --directory=infrastructure/firestore --tags=infrastructure --importPath=@sherpa/firestore/services --buildable
npx nx generate @nrwl/workspace:lib interfaces --directory=infrastructure/firestore --tags=infrastructure --importPath=@sherpa/firestore/interfaces --buildable

npx nx generate @nrwl/workspace:lib core --directory=application/products --tags=application --importPath=@sherpa/products/core --buildable

npx nx generate @nrwl/nest:application products-api --tags=user-interface  -->

npx nx generate @nrwl/node:lib persistence --directory=common/adapters --tags=adapter --importPath=@sherpa/common/persistence --buildable &
npx nx generate @nrwl/nest:lib delivery --directory=products/adapters --tags=adapter --importPath=@sherpa/products/delivery --buildable &
npx nx generate @nrwl/workspace:lib application --directory=products/core --tags=application --importPath=@sherpa/products/application --buildable &
npx nx generate @nrwl/workspace:lib domain --directory=products/core --tags=domain --importPath=@sherpa/products/domain --buildable &
npx nx generate @nrwl/nest:application products-api --tags=user-interface &

npx nx generate @nrwl/node:lib ioc --directory=products/infrastructure --tags=infrastructure --importPath=@sherpa/products/ioc --buildable &
npx nx generate @nrwl/node:lib config --directory=products/infrastructure --tags=infrastructure --importPath=@sherpa/products/config --buildable &

@sherpa-apps 
├── apps
│   └── products-api
│
└── libs
    ├── common  
    │   └── adapters
    │       └── *persistence (repositories)
    │           └── firestore (concrete)
    └── products    
        ├── adapters
        │   └── *delivery
        │       └── products-api (API Controllers)
        ├── infrastructure        
        │   ├── *ioc        
        │   └── *config 
        │        └── services
        │            └── config-service (concrete service)
        └── core
            ├── *application 
            |    ├── services (application services)
            |    |   ├── products-service (concrete service)         
            |    |   └── other-service (concrete service)
            |    └── interfaces (application interfaces)
            |        └── config-service (interface)
            |           
            └── *domain (domain layer)
                ├── exceptions (custom exceptions)
                ├── model (domain entities and value objects)
                ├── services (domain services)
                ├── interfaces (domain interfaces)
                └── repositories (interfaces)

@sherpa/common/persistence
@sherpa/products/delivery
@sherpa/products/application
@sherpa/products/domain
@sherpa/products/ioc
