# class Factory

```cpp
Defined at ../../include/geode/basic/factory.h#62
```

 Generic factory Example of use with A the base class and B, C derived classes      // Instantiation      using MyFactory = Factory< std::string, A, int, double >;      // where: - std::string is the Key type      //        - int and double are the constructor arguments required by      //        the derived classes B and C

      // Registration      MyFactory::register_creator< B >( "key_value_for_B" );      MyFactory::register_creator< C >( "key_value_for_C" );      // B and C constructors take an int and a double

      // Creation      auto c = MyFactory::create( "key_value_for_C", 2, 8.6 );      // where c is a std::unique_ptr< A >



```cpp
Inherits from Singleton
```



## Functions

### register_creator

```cpp
public void register_creator(Key key)
```

```cpp
Defined at ../../include/geode/basic/factory.h#73
```

### create

```cpp
public std::unique_ptr<BaseClass> create(const Key & key, Args... args)
```

```cpp
Defined at ../../include/geode/basic/factory.h#91
```

### list_creators

```cpp
public absl::FixedArray<Key> list_creators()
```

```cpp
Defined at ../../include/geode/basic/factory.h#102
```

### has_creator

```cpp
public bool has_creator(const Key & key)
```

```cpp
Defined at ../../include/geode/basic/factory.h#114
```



