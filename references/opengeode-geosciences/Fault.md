<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class Fault


```cpp
Inherits from Component<2U>
```



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


### Fault

```cpp
public void Fault<dimension>(Fault<dimension> && other)
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


### has_type

```cpp
public bool has_type()
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
public void set_fault_name(basic_string_view name, FaultsBuilderKey )
```




## Enums

| enum class FAULT_TYPE |

--

| no_type |
| normal |
| reverse |
| strike_slip |
| listric |
| decollement |





# class Fault


```cpp
Inherits from Component<3U>
```



