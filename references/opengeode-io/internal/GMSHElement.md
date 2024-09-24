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

# class GMSHElement


## Functions

### GMSHElement

```cpp
public void GMSHElement(geode::index_t physical_entity_id, geode::index_t elementary_entity_id, geode::index_t nb_vertices, Span vertex_ids)
```


### ~GMSHElement

```cpp
public void ~GMSHElement()
```


### add_element

```cpp
public void add_element(geode::BRep & brep, GmshId2Uuids & id_map)
```

### physical_entity_id

```cpp
public geode::index_t physical_entity_id()
```


### elementary_entity_id

```cpp
public geode::index_t elementary_entity_id()
```


### nb_vertices

```cpp
protected geode::index_t & nb_vertices()
```


### vertex_ids

```cpp
protected std::vector<geode::index_t> & vertex_ids()
```


### read_vertex_ids

```cpp
protected void read_vertex_ids()
```




