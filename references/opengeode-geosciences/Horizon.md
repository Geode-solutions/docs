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

# class Horizon


 Geological component describing a Horizon. This component is described by a horizon type.



```cpp
Inherits from Component<dimension>
```



## Functions

### Horizon

```cpp
public void Horizon<dimension>(const Horizon<dimension> & )
```


### operator=

```cpp
public Horizon<dimension> & operator=(const Horizon<dimension> & )
```


### Horizon

```cpp
public void Horizon<dimension>(Horizon<dimension> && other)
```


### ~Horizon

```cpp
public void ~Horizon<dimension>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### contact_type

```cpp
public CONTACT_TYPE contact_type()
```


### Horizon

```cpp
public void Horizon<dimension>(HorizonsKey )
```


### Horizon

```cpp
public void Horizon<dimension>(CONTACT_TYPE type, HorizonsKey )
```


### set_contact_type

```cpp
public void set_contact_type(CONTACT_TYPE type, HorizonsBuilderKey )
```


### set_horizon_name

```cpp
public void set_horizon_name(basic_string_view name, HorizonsBuilderKey )
```




## Enums

| enum class CONTACT_TYPE |

--

| conformal |
| erosion |
| baselap |
| discontinuity |
| topography |
| intrusion |





# class Horizon


```cpp
Inherits from Component<3U>
```



# class Horizon


```cpp
Inherits from Component<2U>
```



