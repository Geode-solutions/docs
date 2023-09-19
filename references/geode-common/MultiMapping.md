# struct MultiMapping


## Members

```cpp
public index_t new_id
```

```cpp
public InlinedVector old_id
```



## Functions

### MultiMapping

```cpp
public void MultiMapping()
```


### MultiMapping

```cpp
public void MultiMapping(index_t new_id_in, InlinedVector old_id_in)
```


### MultiMapping

```cpp
public void MultiMapping(Mapping mapping)
```


### operator==

```cpp
public _Bool operator==(const MultiMapping<index_t> & other)
```


### string

```cpp
public basic_string string()
```




# struct MultiMapping


## Members

```cpp
public Type new_id
```

```cpp
public absl::InlinedVector<Type, 1> old_id
```



## Functions

### MultiMapping

```cpp
public void MultiMapping<Type>()
```


### MultiMapping

```cpp
public void MultiMapping<Type>(Type new_id_in, absl::InlinedVector<Type, 1> old_id_in)
```


### MultiMapping

```cpp
public void MultiMapping<Type>(Mapping<Type> mapping)
```


### operator==

```cpp
public _Bool operator==(const MultiMapping<Type> & other)
```




