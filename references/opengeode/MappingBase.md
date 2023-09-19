# class MappingBase


## Functions

### reserve

```cpp
public void reserve(index_t capacity)
```


### has_mapping_input

```cpp
public _Bool has_mapping_input(const T1 & value)
```


### has_mapping_output

```cpp
public _Bool has_mapping_output(const T2 & value)
```


### in2out

```cpp
public const Storage<T2> & in2out(const T1 & in)
```


### out2in

```cpp
public const Storage<T1> & out2in(const T2 & out)
```


### in2out_map

```cpp
public const absl::flat_hash_map<T1, Storage<T2> > & in2out_map()
```


### out2in_map

```cpp
public const absl::flat_hash_map<T2, Storage<T1> > & out2in_map()
```


### MappingBase

```cpp
protected void MappingBase<T1, T2, StorageType>()
```


### size_input

```cpp
protected index_t size_input()
```


### size_output

```cpp
protected index_t size_output()
```


### in2out_mapping

```cpp
protected absl::flat_hash_map<T1, Storage<T2> > & in2out_mapping()
```


### out2in_mapping

```cpp
protected absl::flat_hash_map<T2, Storage<T1> > & out2in_mapping()
```




