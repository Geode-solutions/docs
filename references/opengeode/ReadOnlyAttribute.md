# class ReadOnlyAttribute


 Read only attribute interface that does not need to know the underlying attribute storage type.



```cpp
Inherits from AttributeBase
```



## Functions

### value

```cpp
public const T & value(index_t element)
```

### type

```cpp
public string_view type()
```


### generic_value

```cpp
public float generic_value(index_t element)
```


### generic_item_value

```cpp
public float generic_item_value(index_t element, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```


### ReadOnlyAttribute

```cpp
protected void ReadOnlyAttribute<T>(AttributeProperties properties)
```




