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

# class ComponentsStorage


## Functions

### nb_components

```cpp
public index_t nb_components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const Component & component(const uuid & id)
```


### component

```cpp
public Component & component(const uuid & id)
```


### begin

```cpp
public Iterator begin()
```


### end

```cpp
public Iterator end()
```


### add_component

```cpp
public void add_component(ComponentPtr component)
```


### save_components

```cpp
public void save_components(basic_string_view filename)
```


### delete_component

```cpp
public void delete_component(const uuid & id)
```


### load_components

```cpp
public void load_components(basic_string_view filename)
```


### file_mapping

```cpp
public flat_hash_map file_mapping(basic_string_view directory)
```




