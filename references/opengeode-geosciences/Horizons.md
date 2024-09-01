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




