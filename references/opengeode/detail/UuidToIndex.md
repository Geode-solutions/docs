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

# class UuidToIndex


## Functions

### nb_mappings

```cpp
public index_t nb_mappings()
```


### index

```cpp
public optional index(const uuid & id)
```


### erase

```cpp
public void erase(const uuid & id)
```


### erase

```cpp
public void erase(index_t index)
```


### set_new_mapping

```cpp
public void set_new_mapping(const uuid & id, const index_t index)
```


### update

```cpp
public void update(Span old2new)
```




