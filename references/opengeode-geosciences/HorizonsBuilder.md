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

# class HorizonsBuilder


# class HorizonsBuilder


# class HorizonsBuilder


## Functions

### load_horizons

```cpp
public void load_horizons(basic_string_view directory)
```


### set_horizon_type

```cpp
public void set_horizon_type(const uuid & horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```


### set_horizon_name

```cpp
public void set_horizon_name(const uuid & id, basic_string_view name)
```


### HorizonsBuilder

```cpp
protected void HorizonsBuilder<>(Horizons<dimension> & horizons)
```


### create_horizon

```cpp
protected const uuid & create_horizon()
```


### create_horizon

```cpp
protected const uuid & create_horizon(typename Horizon<dimension>::HORIZON_TYPE type)
```


### create_horizon

```cpp
protected void create_horizon(uuid horizon_id)
```


### create_horizon

```cpp
protected void create_horizon(uuid horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```


### delete_horizon

```cpp
protected void delete_horizon(const Horizon<dimension> & horizon)
```


### set_horizon_type

```cpp
public void set_horizon_type(const uuid & horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```

### create_horizon

```cpp
protected const uuid & create_horizon(typename Horizon<dimension>::HORIZON_TYPE type)
```

### create_horizon

```cpp
protected void create_horizon(uuid horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```



