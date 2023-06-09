https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/

<!-- npx nx generate @nrwl/workspace:lib models --directory=domain/products --tags=domain --importPath=@sherpa/products/models --buildable
npx nx generate @nrwl/workspace:lib services --directory=domain/products --tags=domain --importPath=@sherpa/products/services --buildable
npx nx generate @nrwl/workspace:lib interfaces --directory=domain/products --tags=domain --importPath=@sherpa/products/interfaces --buildable
npx nx generate @nrwl/workspace:lib services --directory=infrastructure/firestore --tags=infrastructure --importPath=@sherpa/firestore/services --buildable
npx nx generate @nrwl/workspace:lib interfaces --directory=infrastructure/firestore --tags=infrastructure --importPath=@sherpa/firestore/interfaces --buildable

npx nx generate @nrwl/workspace:lib core --directory=application/products --tags=application --importPath=@sherpa/products/core --buildable

npx nx generate @nrwl/nest:application products-api --tags=user-interface  -->

npx nx generate @nrwl/nest:lib api --directory=products/delivery --tags=delivery --importPath=@sherpa/products/api --buildable &
npx nx generate @nrwl/workspace:lib application --directory=products/core --tags=core,application --importPath=@sherpa/products/application --buildable &
npx nx generate @nrwl/workspace:lib domain --directory=products/core --tags=core,domain --importPath=@sherpa/products/domain --buildable &
npx nx generate @nrwl/nest:application products-api --tags=api &

npx nx generate @nrwl/node:lib persistence --directory=products/infrastructure --tags=infrastructure --importPath=@sherpa/products/persistence --buildable &
npx nx generate @nrwl/node:lib ioc --directory=products/infrastructure --tags=infrastructure --importPath=@sherpa/products/ioc --buildable &
npx nx generate @nrwl/node:lib config --directory=products/infrastructure --tags=infrastructure --importPath=@sherpa/products/config --buildable &

npx nx generate @nrwl/workspace:lib commands --directory=products/public --tags=public --importPath=@sherpa/products/commands --buildable &
npx nx generate @nrwl/workspace:lib queries --directory=products/public --tags=public --importPath=@sherpa/products/queries --buildable &
npx nx generate @nrwl/workspace:lib services --directory=products/public --tags=public --importPath=@sherpa/products/services --buildable &

# Hexagonal Architecture

The Onion Architecture is a software design pattern that emphasizes decoupling the application's core logic from its external dependencies such as databases, UI frameworks, and web services. It achieves this by organizing the codebase into concentric circles of layers, with the most internal layer being the domain layer, followed by the application layer, the infrastructure layer, and the UI or delivery layer.

Domain Layer: This layer contains the domain model, business rules, and behavior. It is the most internal layer, and its code should be completely independent of any external dependencies.

Application Layer: This layer contains the application logic that implements use cases and orchestrates the interactions between the domain layer and the infrastructure layer. It relies on interfaces defined in the domain layer and provides concrete implementations for them.

Infrastructure Layer: This layer contains the concrete implementations of the interfaces defined in the domain layer. It also contains the code that interacts with external dependencies such as databases, web services, and file systems.

UI/Delivery Layer: This layer contains the code responsible for presenting information to the user and receiving user input. It interacts with the application layer to execute use cases and retrieve information from the domain layer.

The Onion Architecture promotes loose coupling between the layers, making it easier to test, maintain, and evolve the codebase over time. It also allows for better separation of concerns and enables developers to focus on the business logic rather than the technical details of the application.

@sherpa-apps
├── apps (user-interface)
│   └── products-api 
│
└── libs
    │
    ├── products    
    │   ├── delivery 
    │   │   └── *api
    │   │       └── controllers (API Controllers)
    │   │           └── products-controller (concrete)
    │   ├── infrastructure        
    │   │   ├── *ioc        
    │   │   ├── *config 
    │   │   │    └── services
    │   │   │        └── config-service (concrete)
    │   │   └── *persistence (repositories)
    │   │        └── firestore (concrete)
    │   ├── public        
    │   │   ├── *commands        
    │   │   ├── *services 
    │   │   │    └── services
    │   │   │        └── product-registration-service (concrete)
    │   │   └── *queries
    │   │   
    │   └── core
    │       ├── *application 
    │       │   ├── services 
    │       │   │   ├── products-service (concrete)         
    │       │   │   └── other-service (concrete)
    │       │   └── interfaces
    │       │       ├── products-service-interface (concrete)           
    │       │       └── product-registration-interface (interface)
    │       │           
    │       └── *domain
    │           ├── exceptions (custom exceptions)
    │           ├── model (domain entities and value objects)
    │           ├── services (concrete)
    │           ├── interfaces (interfaces)
    │           └── repositories (interfaces)
    │
    └── other-libraries
        └── ...

* indicates an Nx project 

@sherpa/products/api
@sherpa/products/persistence
@sherpa/products/application
@sherpa/products/domain
@sherpa/products/ioc
@sherpa/products/services
