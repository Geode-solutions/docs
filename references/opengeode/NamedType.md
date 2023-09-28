# class NamedType

```cpp
Defined at ../../include/geode/basic/named_type.h#44
```

 This class enforces a strong typing that can be used in API signature. For example:       struct CustomTag       {       };       using CustomType = NamedType< std::string, CustomTag >;

       CustomType is a new type with a std::string as underlying storage.



## Functions

### NamedType

```cpp
public void NamedType<Type, Tag>()
```

```cpp
Defined at ../../include/geode/basic/named_type.h#49
```

### NamedType

```cpp
public void NamedType<Type, Tag>(Type value)
```

```cpp
Defined at ../../include/geode/basic/named_type.h#51
```

### get

```cpp
public const Type & get()
```

```cpp
Defined at ../../include/geode/basic/named_type.h#53
```

### operator==

```cpp
public bool operator==(const NamedType<Type, Tag> & other)
```

```cpp
Defined at ../../include/geode/basic/named_type.h#58
```

### operator!=

```cpp
public bool operator!=(const NamedType<Type, Tag> & other)
```

```cpp
Defined at ../../include/geode/basic/named_type.h#63
```



