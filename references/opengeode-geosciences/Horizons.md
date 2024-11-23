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

HorizonRangeBase

HorizonRange



## Functions

### Horizons

```cpp
public void Horizons<>(const Horizons<> & )
```


### operator=

```cpp
public Horizons<> & operator=(const Horizons<> & )
```


### ~Horizons

```cpp
public void ~Horizons<>()
```


### nb_horizons

```cpp
public index_t nb_horizons()
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


### save_horizons

```cpp
public void save_horizons(basic_string_view directory)
```


### Horizons

```cpp
protected void Horizons<>()
```


### Horizons

```cpp
protected void Horizons<>(Horizons<> && other)
```


### operator=

```cpp
protected Horizons<dimension> & operator=(Horizons<dimension> && other)
```


### create_horizon

```cpp
public const uuid & create_horizon(HorizonsBuilderKey key)
```


### create_horizon

```cpp
public const uuid & create_horizon(typename Horizon<dimension>::HORIZON_TYPE type, HorizonsBuilderKey key)
```


### create_horizon

```cpp
public void create_horizon(uuid horizon_id, HorizonsBuilderKey key)
```


### create_horizon

```cpp
public void create_horizon(uuid horizon_id, typename Horizon<dimension>::HORIZON_TYPE type, HorizonsBuilderKey key)
```


### delete_horizon

```cpp
public void delete_horizon(const Horizon<dimension> & horizon, HorizonsBuilderKey key)
```


### load_horizons

```cpp
public void load_horizons(basic_string_view directory, HorizonsBuilderKey key)
```


### modifiable_horizons

```cpp
public ModifiableHorizonRange modifiable_horizons(HorizonsBuilderKey key)
```


### modifiable_horizon

```cpp
public Horizon<dimension> & modifiable_horizon(const uuid & id, HorizonsBuilderKey key)
```


### create_horizon

```cpp
public const uuid & create_horizon(typename Horizon<dimension>::HORIZON_TYPE type, HorizonsBuilderKey key)
```

### create_horizon

```cpp
public void create_horizon(uuid horizon_id, typename Horizon<dimension>::HORIZON_TYPE type, HorizonsBuilderKey key)
```



