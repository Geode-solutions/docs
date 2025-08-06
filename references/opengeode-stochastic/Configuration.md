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

# class Configuration


# class Configuration


## Functions

### add_object

```cpp
public void add_object(MarkedObject<Geometry> && object)
```


### change_object

```cpp
public void change_object(index_t idx, MarkedObject<Geometry> && object)
```


### remove_object

```cpp
public void remove_object(index_t idx)
```


### size

```cpp
public index_t size()
```


### object

```cpp
public const MarkedObject<Geometry> & object(index_t idx)
```


### object_ids_with_mark

```cpp
public vector object_ids_with_mark(const Mark & mark)
```




# class Configuration


# class Configuration


