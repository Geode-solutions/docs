# class Fault


 Geological component describing a Fault. This component is described by a fault type.



```cpp
Inherits from Component<dimension>
```



## Functions

### Fault

```cpp
public void Fault<dimension>(const Fault<dimension> & )
```


### operator=

```cpp
public Fault<dimension> & operator=(const Fault<dimension> & )
```


### ~Fault

```cpp
public void ~Fault<dimension>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### component_id

```cpp
public ComponentID component_id()
```


### has_type

```cpp
public _Bool has_type()
```


### type

```cpp
public FAULT_TYPE type()
```


### Fault

```cpp
public void Fault<dimension>(FaultsKey )
```


### Fault

```cpp
public void Fault<dimension>(FAULT_TYPE type, FaultsKey )
```


### set_type

```cpp
public void set_type(FAULT_TYPE type, FaultsBuilderKey )
```


### set_fault_name

```cpp
public void set_fault_name(string_view name, FaultsBuilderKey )
```




## Enums

| enum class FAULT_TYPE |

--

| NO_TYPE |
| NORMAL |
| REVERSE |
| STRIKE_SLIP |
| LISTRIC |
| DECOLLEMENT |





# class Fault


```cpp
Inherits from Component<3U>
```



# class Fault


```cpp
Inherits from Component<2U>
```



