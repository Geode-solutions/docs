# class NamedType


 This class enforces a strong typing that can be used in API signature. For example:       struct CustomTag       {       };       using CustomType = NamedType< std::string, CustomTag >;

       CustomType is a new type with a std::string as underlying storage.



## Functions

### NamedType

```cpp
public void NamedType<Type, Tag>()
```


### NamedType

```cpp
public void NamedType<Type, Tag>(Type value)
```


### get

```cpp
public const Type & get()
```


### operator==

```cpp
public bool operator==(const NamedType<Type, Tag> & other)
```


### operator!=

```cpp
public bool operator!=(const NamedType<Type, Tag> & other)
```




