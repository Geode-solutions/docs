# class TRange

```cpp
Defined at ../../include/geode/basic/range.h#133
```

 This class can be used to iterate over integer loop. Example:              = C++98 loop =    for( index_t i = 0; i < n; i++ )    {      // do something    }

            = C++11-like loop =    for( const auto i : Range{ n } )    {      // do something    }



```cpp
Inherits from BaseRange<Type, geode::IncrementOperator>
```



## Functions

### TRange

```cpp
public void TRange<Type>(T1 begin, T2 end)
```

```cpp
Defined at ../../include/geode/basic/range.h#137
```

### TRange

```cpp
public void TRange<Type>(T end)
```

```cpp
Defined at ../../include/geode/basic/range.h#143
```

### begin

```cpp
public const TRange<Type> & begin()
```

```cpp
Defined at ../../include/geode/basic/range.h#147
```

### end

```cpp
public const TRange<Type> & end()
```

```cpp
Defined at ../../include/geode/basic/range.h#152
```

### operator*

```cpp
public Type operator*()
```

```cpp
Defined at ../../include/geode/basic/range.h#157
```



