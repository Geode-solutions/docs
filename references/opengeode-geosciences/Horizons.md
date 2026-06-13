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

# class Horizons


# class Horizons


# class Horizons


## Records

HorizonRange

HorizonRangeBase



## Functions

### Horizons

```cpp
protected void Horizons<value-parameter-0-0>()
```


### Horizons

```cpp
public void Horizons<value-parameter-0-0>(const Horizons<dimension> & )
```


### operator=

```cpp
public Horizons<dimension> & operator=(const Horizons<dimension> & )
```


### ~Horizons

```cpp
public void ~Horizons<value-parameter-0-0>()
```


### nb_horizons

```cpp
public index_t nb_horizons()
```


### nb_active_horizons

```cpp
public index_t nb_active_horizons()
```


### has_horizon

```cpp
public bool has_horizon(const uuid & id)
```


### horizon

```cpp
public const Horizon<dimension> & horizon(const uuid & id)
```


### horizons

```cpp
public HorizonRange horizons()
```


### active_horizons

```cpp
public HorizonRange active_horizons()
```


### save_horizons

```cpp
public void save_horizons(std::string_view directory)
```


### Horizons

```cpp
protected void Horizons<value-parameter-0-0>(Horizons<dimension> && other)
```


### operator=

```cpp
protected Horizons<dimension> & operator=(Horizons<dimension> && other)
```


### components

```cpp
public HorizonRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const Horizon<dimension> & component(const uuid & id)
```


### create_horizon

```cpp
public const uuid & create_horizon(HorizonsBuilderKey key)
```


### create_horizon

```cpp
public const uuid & create_horizon(CONTACT_TYPE contact_type, HorizonsBuilderKey key)
```


### create_horizon

```cpp
public void create_horizon(uuid horizon_id, HorizonsBuilderKey key)
```


### create_horizon

```cpp
public void create_horizon(uuid horizon_id, CONTACT_TYPE contact_type, HorizonsBuilderKey key)
```


### delete_horizon

```cpp
public void delete_horizon(const Horizon<dimension> & horizon, HorizonsBuilderKey key)
```


### load_horizons

```cpp
public void load_horizons(std::string_view directory, HorizonsBuilderKey key)
```


### modifiable_horizons

```cpp
public ModifiableHorizonRange modifiable_horizons(HorizonsBuilderKey key)
```


### modifiable_horizon

```cpp
public Horizon<dimension> & modifiable_horizon(const uuid & id, HorizonsBuilderKey key)
```




