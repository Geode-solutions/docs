# class TRange


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


### TRange

```cpp
public void TRange<Type>(T end)
```


### begin

```cpp
public const TRange<Type> & begin()
```


### end

```cpp
public const TRange<Type> & end()
```


### operator*

```cpp
public Type operator*()
```




